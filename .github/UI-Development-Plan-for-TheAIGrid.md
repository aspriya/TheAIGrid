# UI-First Development Plan for TheAIGrid

## Phase 1: Foundation & Design System

### 1.1 Project Setup
- Initialize Next.js 15+ with App Router - (done)
- Configure Tailwind CSS with custom design tokens
- Set up component library structure
- Create responsive breakpoint system
- Use JavaScript (not TypeScript)

### 1.2 Design System Core
**Color Palette & Typography:**
- Define professional color scheme (primary, secondary, neutral tones)
- Typography scale for headings, body text, captions
- Consistent spacing system (4px, 8px, 16px, 24px, 32px, etc.)

**Core UI Components (Static):**
```
/components/ui/
├── Button.jsx           # Primary, secondary, ghost, danger variants
├── Input.jsx            # Text, email, password inputs
├── Textarea.jsx         # Multi-line text input
├── Select.jsx           # Dropdown selections
├── Badge.jsx            # Tags, status indicators
├── Card.jsx             # Content containers
├── Avatar.jsx           # User profile images (with fallback initials)
├── Modal.jsx            # Dialog overlays
├── Toast.jsx            # Notification messages
├── Loader.jsx           # Loading states
└── Icon.jsx             # SVG icon wrapper
```

### 1.3 Layout Components
```
/components/layout/
├── Header.jsx           # Main navigation (with auth placeholder)
├── Footer.jsx           # Site footer
├── Sidebar.jsx          # Filter/navigation sidebar
├── PageContainer.jsx    # Consistent page wrapper
├── MobileNav.jsx        # Responsive mobile menu
└── Grid.jsx             # Responsive grid layouts
```

## Phase 2: Mock Authentication & User Context

### 2.1 Authentication Placeholders
**Mock Auth System (for development):**
- `AuthProvider.jsx` - Context with mock user state
- `ProtectedRoute.jsx` - Route wrapper (allows all for now)
- Mock user data structure matching future NextAuth.js format
- Login/logout UI components (non-functional)

### 2.2 User Profile Components
```
/components/profile/
├── ProfileForm.jsx      # Unified profile editor
├── ProfileView.jsx      # Public profile display
├── ExpertiseSection.jsx # Skills and collaboration preferences
├── ProjectsSection.jsx  # User's listed projects
├── BioSection.jsx       # General information
└── ProfileCard.jsx      # Compact profile preview
```

**Mock Profile Data Structure:**
```javascript
const mockUser = {
  id: "user-123",
  name: "John Doe",
  email: "john@example.com",
  image: "/placeholder-avatar.jpg",
  bio: "AI enthusiast and startup founder...",
  expertise: ["React", "Machine Learning", "SaaS Marketing"],
  lookingFor: ["Co-founder", "Technical advisor"],
  projects: [] // Will link to projects collection
}
```

## Phase 3: Project Management UI

### 3.1 Project Components
```
/components/projects/
├── ProjectForm.jsx      # Create/edit project form
├── ProjectCard.jsx      # Project preview in grids
├── ProjectDetail.jsx    # Full project view
├── ProjectGrid.jsx      # Responsive project listing
├── CollaborationSection.jsx # Partnership needs
├── TechStackSelector.jsx # Technology selection
├── PricingSection.jsx   # Sale price options
└── ProjectStatus.jsx    # Status indicators
```

### 3.2 Mock Project Data
```javascript
const mockProject = {
  id: "project-123",
  name: "AI Chat Assistant",
  description: "Revolutionary customer service AI...",
  techStack: ["Next.js", "OpenAI", "Tailwind"],
  demoUrl: "https://demo.example.com",
  isForSale: true,
  price: 15000,
  collaborationNeeds: [
    {
      role: "Co-founder",
      profile: "Marketing & Sales",
      compensation: "Equity Only"
    }
  ],
  status: "seeking-collaboration",
  upvotes: 24,
  createdBy: "user-123"
}
```

## Phase 4: Discovery & Browse Interface

### 4.1 Search & Filter Components
```
/components/discovery/
├── SearchBar.jsx        # Keyword search with suggestions
├── FilterSidebar.jsx    # Advanced filtering options
├── SortControls.jsx     # Sorting dropdown
├── ResultsHeader.jsx    # Count and view toggles
├── PriceRangeSlider.jsx # Price filtering
├── TagFilter.jsx        # Technology/skill filters
└── SavedSearches.jsx    # Bookmarked searches
```

### 4.2 Browse Pages & Layouts
```
/app/
├── page.jsx             # Homepage with featured projects
├── browse/page.jsx      # Main discovery page
├── search/page.jsx      # Search results
└── projects/[id]/page.jsx # Project detail page
```

## Phase 5: Hat System UI (Role Context)

### 5.1 Role Context Components
```
/components/hats/
├── HatSelector.jsx      # Switch between Creator/Collaborator/Acquirer
├── RoleContextProvider.jsx # Manage current user intent
├── RoleBanner.jsx       # Display current mode
├── RoleSpecificNav.jsx  # Contextual navigation
└── HatIndicator.jsx     # Visual role indicator
```

### 5.2 Role-Specific Dashboards
**Creator Dashboard:**
- Project management interface
- Performance metrics (mock data)
- Collaboration requests

**Collaborator Dashboard:**
- Skill-matched opportunities
- Partnership recommendations
- Expertise showcase

**Acquirer Dashboard:**
- Investment-focused views
- Price-based recommendations
- Due diligence tools

## Phase 6: Interaction Components (Static)

### 6.1 User Interaction UI
```
/components/interactions/
├── InterestButton.jsx   # Express interest (UI only)
├── UpvoteButton.jsx     # Project voting (UI only)
├── WatchlistButton.jsx  # Save to watchlist (UI only)
├── ShareButton.jsx      # Social sharing
└── ContactButton.jsx    # Initiate contact (placeholder)
```

### 6.2 Notification Center
- `NotificationCenter.jsx` - notification dropdown
- `NotificationItem.jsx` - individual notification
- Mock notification data for different types

## Development Strategy

### Mock Data Management
- Create `data/mockData.js` with comprehensive sample data
- Use React Context for mock state management
- Design data structures to match future Firebase schema

### Component Design Principles
- **Extensible Props:** Design components to accept auth/data props later
- **Loading States:** Include skeleton screens and loading indicators
- **Error States:** Error boundaries and fallback UIs
- **Accessibility:** ARIA labels, keyboard navigation, screen reader support

### Future Integration Readiness
```javascript
// Example component designed for future auth integration
const ProfileForm = ({ 
  user, // Will come from NextAuth session
  onSave, // Will connect to Firebase
  isLoading = false // For async operations
}) => {
  // Component logic
}
```

### Static Data Sources
- Use JSON files for mock data
- Create realistic sample content
- Include edge cases (empty states, long text, etc.)

This UI-first approach allows you to:
1. **Focus on user experience** without backend complexity
2. **Iterate quickly** on design and interactions
3. **Get stakeholder feedback** early
4. **Build components** that easily integrate with NextAuth.js and Firebase later
5. **Test responsive design** across all device sizes

The key is designing component APIs that anticipate future authentication and data requirements while remaining functional with mock data.
