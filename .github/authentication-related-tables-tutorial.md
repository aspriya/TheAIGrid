# Authentication Tables 101 (NextAuth + Prisma)

A quick, practical guide to how authentication works using NextAuth with a database via Prisma. Simple language, ground‑gist.

## Why a Database (Adapter) at all?

An Adapter connects NextAuth to your database so auth data is persisted. You get:
- Stable user IDs to relate your domain data (e.g., Project.ownerUserId).
- Proper linking of OAuth accounts (Google, etc.).
- Optional database‑managed sessions (easy revocation, device control).
- Email flows (verification/magic links) via stored tokens.

Without an adapter, NextAuth uses JWT‑only sessions (no DB rows). That works for gating UI, but server‑side checks and relations are harder because there’s no guaranteed user record.

## The Four Core Tables (NextAuth)

1) User
- One row per person on your platform.
- Common fields: id, name, email, emailVerified, image, createdAt, updatedAt.
- Purpose: canonical identity. Other tables (projects, messages, payments) point to User.id.

2) Account
- Links a User to an OAuth provider account (e.g., Google).
- Fields: userId, provider, providerAccountId, access/refresh tokens, expires, scope.
- Purpose: account linking and token storage. Prevents duplicate users if the same person logs in with multiple providers.

3) Session
- One row per active login (device/browser) when using database sessions (optional).
- Fields: sessionToken, userId, expires.
- Purpose: server‑side session control (revoke sessions, sign out everywhere). If you stick to JWT sessions, this table isn’t used.

4) VerificationToken
- Stores one‑time tokens for email flows.
- Fields: identifier (email), token, expires.
- Purpose: magic links and email verification.

## JWT Sessions vs Database Sessions

JWT Sessions (default without adapter)
- What: Encrypted/signed token stored in a cookie.
- Pros: no DB hit per request; simple; great for MVPs.
- Cons: no persisted user row by default; revocation is hard (usually wait for expiry/rotation).

Database Sessions (when using adapter with session.strategy='database')
- What: Cookie stores a random sessionToken; server looks up the session row.
- Pros: easy revocation, device management, central control.
- Cons: small DB overhead per request (can be cached).

You can also use an adapter (to persist User/Account) and keep JWT as the session strategy. This gives you a stable user record plus stateless sessions.

## Sign‑In Flow (Adapter Enabled)

- User clicks “Sign in with Google”.
- NextAuth validates with Google and either:
  - creates a new User + Account row (first time), or
  - finds existing User by Account and signs them in.
- A session is established:
  - JWT strategy: signed token cookie containing standard claims (and optional userId via callbacks).
  - Database strategy: cookie with sessionToken that maps to the Session table.
- Client uses `useSession()` to render UI (authenticated/unauthenticated/loading).
- Server uses `getServerSession()` to read the session and get the authenticated user.

## Practical Server Examples

- Ownership checks
  - Get session on the server: `const session = await getServerSession(...)`.
  - Use `session.user.id` (adapter needed for stable id) to query: `await prisma.project.findMany({ where: { ownerUserId: session.user.id } })`.

- Enforce limits (e.g., 3 free projects)
  - Count: `await prisma.project.count({ where: { ownerUserId: session.user.id, visibility: 'public' } })`.
  - If count >= 3: require a successful Payment(EXTRA_PROJECT) before creating a new one.

- Messaging
  - Store `senderUserId` and `recipientUserId` referencing User.id so conversations are attributed correctly.

## Security Notes (simple gist)

- Always verify on the server using `getServerSession()` before mutating data.
- Don’t trust client‑side checks alone (they’re easy to bypass).
- Keep `NEXTAUTH_SECRET` safe; set `NEXTAUTH_URL` correctly in each environment.
- For JWT strategy, prefer shorter session lifetimes; rotate secrets if compromised.
- For database sessions, you can revoke specific sessions by deleting rows.

## Setup Checklist

- Prisma schema includes: User, Account, Session, VerificationToken.
- NextAuth configured with:
  - `adapter: PrismaAdapter(prisma)` (after Prisma is ready)
  - Google provider using `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
  - `NEXTAUTH_SECRET` set
  - Optionally, `session: { strategy: 'database' }` or keep default (JWT)
- Use `SessionProvider` in the app to enable `useSession()` in client components.
- Use `getServerSession()` anywhere you must enforce rules on the server.

## When to Choose What

- MVP, no DB yet: JWT‑only is fine to gate UI.
- As soon as you relate data to users (projects, messages, payments): add PrismaAdapter so you have a stable User.id.
- Need org policies, revocation, device lists: switch to database sessions.

That’s the core. Persist auth data with the adapter for stable identities, choose JWT or DB sessions based on revocation/control needs, and always enforce rules on the server with `getServerSession()`.
