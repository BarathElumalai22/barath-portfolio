import { guestbookRouter } from "~/server/api/routers/guestbook";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({ guestbook: guestbookRouter });

export type AppRouter = typeof appRouter;
