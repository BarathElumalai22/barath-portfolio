
# Barath E · Portfolio (T3 stack)

Next.js 14 (App Router) · TypeScript · Tailwind CSS · tRPC · Prisma (Postgres) · NextAuth (GitHub)

The portfolio content lives in `src/data/portfolio.ts`. The guestbook is the tRPC + Prisma + NextAuth backend.


## Environment
- `DATABASE_URL`: free Postgres from Neon, Supabase or Vercel Postgres
- `NEXTAUTH_SECRET`: `openssl rand -base64 32`
- `NEXTAUTH_URL`: `http://localhost:3000` locally, your live URL in production
- `GITHUB_ID` / `GITHUB_SECRET`: GitHub → Settings → Developer settings → OAuth Apps → New.
  Callback URL: `<NEXTAUTH_URL>/api/auth/callback/github`

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Import it on vercel.com, add the 5 environment variables above.
3. Run `npm run db:push` once against the production `DATABASE_URL`.
4. Add a second GitHub OAuth app (or edit the callback) for your production URL.

## Add projects
Edit the `projects` array in `src/data/portfolio.ts`. The Projects section and nav link appear automatically.
