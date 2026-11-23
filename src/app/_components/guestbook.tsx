
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import { api } from "~/trpc/react";

export function Guestbook() {
  const { data: session } = useSession();
  const utils = api.useUtils();
  const [message, setMessage] = useState("");

  const entries = api.guestbook.list.useQuery();
  const create = api.guestbook.create.useMutation({
    onSuccess: async () => {
      setMessage("");
      await utils.guestbook.list.invalidate();
    },
  });
  const remove = api.guestbook.delete.useMutation({
    onSuccess: () => utils.guestbook.list.invalidate(),
  });

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
      {/* Form Card */}
      <div className="slit-frame rounded-xl p-6 sm:p-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-white">Leave a Note</h3>
          <span className="meta">Peer Endorsements</span>
        </div>
        <p className="text-xs text-neutral-400 mb-5">
          Sign the visitor registry using your GitHub profile.
        </p>

        {session ? (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (message.trim()) create.mutate({ message });
            }}
          >
            <div className="relative">
              <textarea
                className="w-full bg-[#0a0a0d] border border-white/10 rounded-lg p-3.5 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white/30 font-mono resize-y min-h-[96px]"
                placeholder="Say hello, share advice, or leave an endorsement..."
                maxLength={200}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="absolute right-2.5 bottom-2.5 font-mono text-[10px] text-neutral-500">
                {message.length}/200
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                disabled={create.isLoading || !message.trim()}
                className="btn-pill !py-2 !px-4 !text-xs disabled:opacity-40"
              >
                {create.isLoading ? "Submitting…" : "Post Endorsement ↗"}
              </button>

              <button
                type="button"
                onClick={() => void signOut()}
                className="btn-pill-outline !py-1.5 !px-3 !text-xs"
              >
                Sign out
              </button>
            </div>

            {create.error && (
              <p className="text-xs text-red-400 font-mono">
                Failed to post: {create.error.message}
              </p>
            )}
          </form>
        ) : (
          <div className="p-5 rounded-lg bg-[#0e0e11] border border-white/5 space-y-4">
            <p className="text-xs text-neutral-300 leading-relaxed">
              Authenticate via GitHub to leave a permanent message or recommendation.
            </p>
            <button
              type="button"
              onClick={() => void signIn("github")}
              className="btn-pill !py-2 !px-4 !text-xs"
            >
              <span>Sign in with GitHub</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
      </div>

      {/* Messages Feed */}
      <div className="slit-frame rounded-xl p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="meta">Visitor Feed</h3>
            <span className="text-[10px] font-mono text-neutral-400">
              {entries.data?.length ?? 0} Messages
            </span>
          </div>

          <div className="max-h-[300px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
            {entries.isLoading && (
              <p className="text-xs font-mono text-neutral-500 py-6 text-center">
                Querying registry records…
              </p>
            )}
            {entries.error && (
              <p className="text-xs font-mono text-neutral-400 py-6 text-center">
                Database ready for local testing. Connect SQLite/Postgres to persist.
              </p>
            )}
            {entries.data?.length === 0 && (
              <p className="text-xs font-mono text-neutral-500 py-6 text-center">
                No entries yet. Be the first to leave a mark.
              </p>
            )}

            {entries.data?.map((e) => (
              <div
                key={e.id}
                className="p-3 rounded-lg bg-[#0a0a0d] border border-white/5 flex items-start gap-3"
              >
                {e.user.image ? (
                  <Image
                    src={e.user.image}
                    alt={e.user.name ?? "User"}
                    width={28}
                    height={28}
                    className="rounded-full flex-shrink-0"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-mono text-[10px] text-white flex-shrink-0">
                    {(e.user.name ?? "A")[0]}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="text-white font-medium truncate">
                      {e.user.name ?? "Anonymous"}
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      {e.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 break-words">
                    {e.message}
                  </p>
                </div>

                {session?.user.id === e.userId && (
                  <button
                    type="button"
                    onClick={() => remove.mutate({ id: e.id })}
                    className="text-[10px] font-mono text-neutral-500 hover:text-red-400 ml-2"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
          <span>Encrypted with NextAuth</span>
          <span>Verified Registry</span>
        </div>
      </div>
    </div>
  );
}
