High-level next steps

1. Set up Prisma + DB
- Add Prisma and adapter packages; connect to Vercel Postgres/Neon; define schema.prisma with:
  - NextAuth tables (User, Account, Session, VerificationToken).
  - Domain: Project, CollaborationNeed, TechStack, Tag, join tables, Upvote.

2. Wire NextAuth to PrismaAdapter
- Update route.js to use PrismaAdapter and ensure correct env vars.

3. Seed with current mocks
- Create a seed script to import mockUsers and mockProjects into the DB (normalize tech stacks, tags, collaborationNeeds).

4. Replace mocks in pages
- page.js: fetch projects server-side (or via /api/projects) with filtering/search; pass as props to client components.
- page.js: fetch single project server-side; pass project and session?.user.
- page.js: swap featured projects section to DB data.

5. Implement minimal APIs/server actions
- Projects: list with filters, get by id, create/update, list featured.
- Upvotes: toggle per user/project (store Upvote rows, derive counts).
- Optional: contact/apply endpoint to persist requests.

6. Add .env.local and sample env
- GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NEXTAUTH_SECRET, DB connection string.

7. Fix UI bugs and tighten typings
- Replace undefined user usage; add defensive checks; consider Zod for payloads.
