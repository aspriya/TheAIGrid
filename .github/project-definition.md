# Project Name: TheAIGrid

## About the Platform

TheAIGrid is more than a marketplace; it's a launchpad for the next generation of AI ventures. Our core mission is to bridge the gap between brilliant technical creators and the business, marketing, and domain expertise they need to build successful companies.

TheAIGrid is built on the principle of flexibility. We recognize that in today's dynamic tech landscape, people wear multiple hats. Our platform empowers every user to seamlessly switch between different modes of action without needing separate accounts or being locked into a single role.

Any user can:
* **List a Project:** Showcase an AI application, define its status (e.g., for sale, seeking partners), and outline collaboration needs.
* **Lend Your Expertise:** Offer your skills in business, marketing, design, or a specific industry to join and grow a promising venture.
* **Acquire a Venture:** Browse for mature applications or micro-businesses to purchase or invest in.

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
* As a User, I can create a single, unified profile that serves all my needs. This profile will have distinct sections I can fill out:
    * A general bio.
    * A section for **"My Expertise"** where I can list my skills, industry knowledge, and what I look for in a collaboration (my "Collaborator" hat).
    * A section for **"My Projects"** which will automatically display projects I have listed (my "Creator" hat).

### Project Creation & Management
* As a User, I can list a new AI project. The listing form will include:
    * Standard project details (name, description, demo link, tech stack).
    * An option to set a sale price if the project is for sale.
    * A dedicated **"Collaboration Opportunities"** section to define the talent needed (e.g., Role: Co-founder, Profile: Hustler/Marketing, Compensation: Equity Only).
* As a User, I can edit or unlist my projects at any time.

### Discovery & Interaction
* As a User, I can browse, search, and filter all listed projects.
* As a User, my search filters will be powerful, allowing me to find exactly what I'm looking for, whether it's:
    * Projects for sale within a certain price range.
    * Projects built with a specific technology (e.g., `Next.js`).
    * Projects looking for a specific skill I possess (e.g., `SaaS Marketing`).
* As a User, I can view any project's details, including its collaboration needs and the profile of the user who created it.
* As a User, I can express interest in a project, which sends a notification to the project owner.
* As a User, I can upvote projects I find promising and save them to a personal "Watchlist".

## Tech Stack for MVP (Iteration 1) 🚀

* **Framework:** Latest LTS Next.js (15+) with JavaScript
* **Styling:** Tailwind CSS
* **Authentication:** NextAuth.js (for Google OAuth 2.0 and future provider extensibility)
* **Database:** Cloud Firestore
    * **Key Design Decision:** There will be **no `role` field** in the `users` collection. A user's capabilities are defined by their associated data (e.g., owning a document in the `projects` collection makes them a "Creator"; having skills in their profile makes them a "Collaborator"). This ensures maximum flexibility.
* **File Storage:** Cloud Storage for Firebase (for hosting user-uploaded images and demo videos)
* **Future Considerations:** For scaling post-MVP, explore a dedicated search service (e.g., Algolia) for faster, more complex queries, and a robust messaging service (e.g., Sendbird or build on Firebase).ion-oriented model. This version will serve as a clear and robust blueprint for your development.

## Potential Monetization Paths (Post-MVP)

* **Freemium Model:** Users can list/browse for free.
* **Premium Listings:** Users can pay a fee to "feature" or "promote" their project for higher visibility.
* **Subscription for Power Users:** Users can pay a monthly subscription for advanced features like detailed analytics, enhanced search filters, and direct messaging capabilities.
* **Success Fee / Escrow:** Charge a small commission (e.g., 3-5%) on the final sale price when a project is acquired through the platform.