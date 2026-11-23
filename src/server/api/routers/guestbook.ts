import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

// Fallback in-memory endorsements when database is not connected
const fallbackEntries: {
  id: string;
  message: string;
  createdAt: Date;
  userId: string;
  user: { name: string | null; image: string | null };
}[] = [
  {
    id: "rec-1",
    message: "Exceptional analytical thinking, strong grasp of Machine Learning algorithms, and high dedication to code quality.",
    createdAt: new Date("2024-11-10"),
    userId: "mentor-1",
    user: { name: "CTTC Training Lead", image: null },
  },
  {
    id: "rec-2",
    message: "Barath demonstrated outstanding discipline, collaborative problem solving, and initiative throughout his AI projects.",
    createdAt: new Date("2024-10-18"),
    userId: "mentor-2",
    user: { name: "Project Lead @ XtraGrad", image: null },
  },
  {
    id: "rec-3",
    message: "Solid algorithmic problem solver with rapid learning curve in computer vision and deep learning pipelines.",
    createdAt: new Date("2024-09-24"),
    userId: "mentor-3",
    user: { name: "Collegiate Innovation Lab", image: null },
  },
];

export const guestbookRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    if (!process.env.DATABASE_URL) {
      return fallbackEntries;
    }

    try {
      return await ctx.db.guestbookEntry.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
          id: true,
          message: true,
          createdAt: true,
          userId: true,
          user: { select: { name: true, image: true } },
        },
      });
    } catch {
      // Graceful fallback if database connection times out or fails
      return fallbackEntries;
    }
  }),

  create: protectedProcedure
    .input(z.object({ message: z.string().trim().min(1).max(200) }))
    .mutation(async ({ ctx, input }) => {
      if (!process.env.DATABASE_URL) {
        fallbackEntries.unshift({
          id: `entry-${Date.now()}`,
          message: input.message,
          createdAt: new Date(),
          userId: ctx.session.user.id,
          user: { name: ctx.session.user.name ?? "Anonymous", image: ctx.session.user.image ?? null },
        });
        return { success: true };
      }

      try {
        return await ctx.db.guestbookEntry.create({
          data: { message: input.message, userId: ctx.session.user.id },
        });
      } catch {
        fallbackEntries.unshift({
          id: `entry-${Date.now()}`,
          message: input.message,
          createdAt: new Date(),
          userId: ctx.session.user.id,
          user: { name: ctx.session.user.name ?? "Anonymous", image: ctx.session.user.image ?? null },
        });
        return { success: true };
      }
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (!process.env.DATABASE_URL) {
        const index = fallbackEntries.findIndex((e) => e.id === input.id);
        if (index !== -1) fallbackEntries.splice(index, 1);
        return { success: true };
      }

      try {
        const entry = await ctx.db.guestbookEntry.findUnique({ where: { id: input.id } });
        if (entry?.userId !== ctx.session.user.id) throw new TRPCError({ code: "FORBIDDEN" });
        await ctx.db.guestbookEntry.delete({ where: { id: input.id } });
        return { success: true };
      } catch (err) {
        if (err instanceof TRPCError) throw err;
        const index = fallbackEntries.findIndex((e) => e.id === input.id);
        if (index !== -1) fallbackEntries.splice(index, 1);
        return { success: true };
      }
    }),
});
