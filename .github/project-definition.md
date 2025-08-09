# Project Name: TheAIGrid

## About the Platform

TheAIGrid is more than a marketplace; it's a launchpad for the next generation of AI ventures. Our core mission is to bridge the gap between brilliant technical creators and the business, marketing, and domain expertise they need to build successful companies.

TheAIGrid is built on the principle of flexibility. We recognize that in today's dynamic tech landscape, people wear multiple hats. Our platform empowers every user to seamlessly switch between different modes of action without needing separate accounts or being locked into a single role.

Any user can:
* **List a Project:** Showcase an AI application, define its status (e.g., for sale, seeking partners), and outline collaboration needs.
* **Lend Your Expertise:** Offer your skills in business, marketing, design, or a specific industry to join and grow a promising venture.
* **Connect with Acquirers/Investors:** Browse and be discovered by users looking to acquire or invest in mature applications.

## Look and Feel

* **Design:** Fully professional, clean, simple, and modern. The design must inspire trust, confidence, and a spirit of collaboration.
* **Responsiveness:** Mobile-responsive to ensure a seamless experience on all devices.
* **User Experience:** Intuitive, empowering, and action-oriented. The platform should make it effortless for users to discover opportunities and connect with others.

## Users

TheAIGrid has **one unified user type**. We don't believe in rigid roles. Instead, users can put on different "hats" depending on their goals at any given moment. A user's profile and actions on the platform define their intent.

The primary "hats" a user can wear are:

* **The Creator Hat:** When a user lists their own AI project, they are acting as a Creator.
* **The Collaborator Hat:** When a user fills out their expertise and browses opportunities to join a team, they are acting as a Collaborator.
* **The Acquirer Hat:** When a user is searching for projects to buy or invest in, they are acting as an Acquirer.

Any user can wear any hat at any time.

## User Stories (for MVP)

### Profile & Account Management
* As a User, I can securely sign in or up using my Google account.
* As a User, I can create a single, unified profile that serves all my needs, including:
  * A general bio.
  * A section for **"My Expertise"** where I can list my skills, industry knowledge, and what I look for in a collaboration (my "Collaborator" hat).
  * A section for **"My Projects"** which will automatically display projects I have listed (my "Creator" hat).

### Project Creation & Management
* As a User, I can list a new AI project with:
  * Standard project details (name, description, demo link, tech stack).
  * An option to set a sale price if the project is for sale.
  * A dedicated **"Collaboration Opportunities"** section to define the talent needed (e.g., Role: Co-founder, Profile: Marketing, Compensation: Equity Only).
* As a User, I can edit or unlist my projects at any time.

### Discovery & Interaction
* As a User, I can browse, search, and filter all listed projects.
* As a User, I can filter by technology, category, price (if for sale), and project status.
* As a User, I can view any project's details, including its collaboration needs and the profile of the user who created it.
* As a User, I can express interest in a project, which sends a message to the project owner. Messaging is kept simple in MVP: any interested user can send a message to the owner of a project (scoped per project).

## Monetization and Listing Rules (MVP)

To keep the platform sustainable while remaining accessible:

* **Free Listings:** Each user can publish up to **3 projects for free**.
* **Additional Listings:** Each project beyond the free quota costs **$3 USD** (Payment type: `EXTRA_PROJECT`).
* **Spotlight Boost:** Users can optionally elevate a project to appear before free listings for **$5 USD** (Payment type: `SPOTLIGHT`). Spotlighted projects are prioritized in listings.  
  Name: **Spotlight Boost**.
* **Payments:** Stripe will be used as the payment provider (integration to be configured). Until then, payments can be stubbed in development.
* **No On‑Platform Acquisition Payments:** The platform does not process acquisition/sale transactions. Interested parties connect on-platform, then continue offline/externally.

## Tech Stack for MVP (Iteration 1) 🚀

* **Framework:** Latest LTS Next.js (15+) with JavaScript
* **Styling:** Tailwind CSS (v4)
* **Authentication:** NextAuth.js (Google OAuth 2.0; Prisma Adapter)
* **Database:** PostgreSQL (Vercel Postgres/Neon) via **Prisma ORM**
  * Rationale: strong relational filtering (technologies, categories, ownership), robust migrations, and first‑class Next.js support.
* **Payments:** Stripe (planned; to power extra listings and Spotlight Boost)
* **File Storage:** TBD (can be added later for images/videos)
* **Future Considerations:** For scaling post-MVP, explore a dedicated search service (e.g., Algolia) and consider a richer messaging service (e.g., Sendbird or custom service). 

## Data Model (MVP)

High-level relational entities (Prisma-ready):

* **User, Account, Session, VerificationToken** (NextAuth)
* **Project**: ownerUserId, name, slug, description, status, visibility, category, demoUrl, repoUrl, featured, `spotlight` (bool), `spotlightPurchasedAt` (datetime), `viewsCount`, timestamps
* **Technology** and **ProjectTechnology** (many-to-many) for stack filtering
* **CollaborationNeed**: projectId, role, profile, compensation, description, isOpen
* **Message**: simple per-project messages (projectId, senderUserId, recipientUserId, body, readAt)
* **Payment**: userId, projectId (nullable), type (`EXTRA_PROJECT` | `SPOTLIGHT`), amountCents, currency, provider refs, status

Notes:
* Spotlight Boost is represented as a boolean on Project with purchase timestamp and is prioritized in sorting.

## Roadmap After MVP

* Full-text search / external search (Algolia)
* Richer messaging (threads, attachments, read receipts)
* Organization/workspaces (multi-tenant)
* Analytics dashboards and daily aggregates
* Image/video storage & media processing
* Subscription plans for power users (limits, analytics, messaging)

## Potential Monetization Paths (Post-MVP)

* **Premium Listings:** Extend Spotlight Boost options (e.g., longer duration, category highlights).
* **Subscription for Power Users:** Monthly subscription for advanced features like analytics, enhanced filters, and richer messaging.
* (Optional, future) **Success Fee / Escrow:** If ever introduced, process externally or via partners; not in scope for MVP.