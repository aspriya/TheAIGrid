// Mock user data
export const mockUsers = [
  {
    id: "user-1",
    name: "Sarah Chen",
    email: "sarah@example.com",
    image: null,
    bio: "AI researcher turned entrepreneur. Passionate about building AI tools that solve real-world problems.",
    expertise: ["Machine Learning", "Python", "TensorFlow", "Product Strategy"],
    lookingFor: ["Co-founder", "Business Development", "Marketing"],
    projects: ["project-1", "project-3"]
  },
  {
    id: "user-2",
    name: "Marcus Johnson",
    email: "marcus@example.com",
    image: null,
    bio: "Full-stack developer with 8+ years experience. Love creating beautiful user experiences.",
    expertise: ["React", "Next.js", "Node.js", "UI/UX Design"],
    lookingFor: ["Technical Co-founder", "CTO Role"],
    projects: ["project-2"]
  },
  {
    id: "user-3",
    name: "Elena Rodriguez",
    email: "elena@example.com",
    image: null,
    bio: "Growth marketer and SaaS expert. Helped 5+ startups reach 7-figure ARR.",
    expertise: ["SaaS Marketing", "Growth Hacking", "Customer Success", "Sales"],
    lookingFor: ["CMO Role", "Marketing Partnership"],
    projects: []
  }
];

// Mock project data
export const mockProjects = [
  {
    id: "project-1",
    name: "AI Customer Support Assistant",
    description: "Revolutionary customer service AI that reduces response time by 90% and increases satisfaction scores. Built with OpenAI GPT-4 and trained on millions of support interactions.",
    techStack: ["Next.js", "OpenAI", "TypeScript", "PostgreSQL", "Tailwind"],
    demoUrl: "https://demo-ai-support.example.com",
    githubUrl: "https://github.com/example/ai-support",
    isForSale: true,
    price: 45000,
    collaborationNeeds: [
      {
        role: "Co-founder",
        profile: "Sales & Business Development",
        compensation: "Equity + Salary",
        description: "Looking for someone to lead sales and help scale the business"
      },
      {
        role: "Marketing Lead",
        profile: "SaaS Marketing Expert",
        compensation: "Equity Only",
        description: "Need help with content marketing and lead generation"
      }
    ],
    status: "seeking-collaboration",
    upvotes: 47,
    views: 1234,
    createdBy: "user-1",
    createdAt: "2024-01-15",
    updatedAt: "2024-02-01",
    featured: true,
    category: "Customer Service",
    tags: ["B2B", "SaaS", "Customer Support", "AI Chat"]
  },
  {
    id: "project-2",
    name: "Smart Content Generator",
    description: "AI-powered content creation platform that generates blog posts, social media content, and marketing copy in seconds. Perfect for small businesses and marketers.",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "AWS"],
    demoUrl: "https://smart-content.example.com",
    githubUrl: null,
    isForSale: false,
    price: null,
    collaborationNeeds: [
      {
        role: "Business Co-founder",
        profile: "Content Marketing Expert",
        compensation: "Equity Only",
        description: "Need someone who understands content marketing to help shape the product"
      }
    ],
    status: "seeking-collaboration",
    upvotes: 32,
    views: 892,
    createdBy: "user-2",
    createdAt: "2024-01-20",
    updatedAt: "2024-01-25",
    featured: false,
    category: "Content Creation",
    tags: ["Content", "Marketing", "SMB", "Copywriting"]
  },
  {
    id: "project-3",
    name: "AI Code Review Assistant",
    description: "Automated code review tool that catches bugs, suggests improvements, and ensures code quality standards. Integrates with GitHub, GitLab, and Bitbucket.",
    techStack: ["TypeScript", "Node.js", "Python", "Docker", "Redis"],
    demoUrl: "https://code-review-ai.example.com",
    githubUrl: "https://github.com/example/code-review-ai",
    isForSale: true,
    price: 75000,
    collaborationNeeds: [],
    status: "for-sale",
    upvotes: 28,
    views: 567,
    createdBy: "user-1",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-10",
    featured: true,
    category: "Developer Tools",
    tags: ["DevTools", "Code Quality", "GitHub", "Automation"]
  },
  {
    id: "project-4",
    name: "AI Personal Finance Advisor",
    description: "Smart budgeting app that uses AI to analyze spending patterns and provide personalized financial advice. Helps users save money and achieve financial goals.",
    techStack: ["Flutter", "Firebase", "Python", "TensorFlow"],
    demoUrl: "https://finance-ai.example.com",
    githubUrl: null,
    isForSale: false,
    price: null,
    collaborationNeeds: [
      {
        role: "Technical Co-founder",
        profile: "Mobile Developer",
        compensation: "Equity + Salary",
        description: "Looking for iOS/Android expert to lead mobile development"
      },
      {
        role: "Finance Expert",
        profile: "Financial Advisor",
        compensation: "Equity Only",
        description: "Need domain expertise in personal finance and investment"
      }
    ],
    status: "seeking-collaboration",
    upvotes: 19,
    views: 445,
    createdBy: "user-2",
    createdAt: "2024-02-05",
    updatedAt: "2024-02-12",
    featured: false,
    category: "FinTech",
    tags: ["Personal Finance", "Mobile App", "Budgeting", "Investment"]
  },
  {
    id: "project-5",
    name: "E-commerce Recommendation Engine",
    description: "Advanced ML-powered recommendation system that increases e-commerce conversion rates by 35%. Easy to integrate with Shopify, WooCommerce, and custom platforms.",
    techStack: ["Python", "Django", "PostgreSQL", "scikit-learn", "Redis"],
    demoUrl: "https://recommend-engine.example.com",
    githubUrl: "https://github.com/example/recommendation-engine",
    isForSale: true,
    price: 120000,
    collaborationNeeds: [],
    status: "for-sale",
    upvotes: 51,
    views: 1567,
    createdBy: "user-3",
    createdAt: "2024-01-10",
    updatedAt: "2024-02-08",
    featured: true,
    category: "E-commerce",
    tags: ["Machine Learning", "E-commerce", "Recommendations", "SaaS"]
  },
  {
    id: "project-6",
    name: "AI Meeting Summarizer",
    description: "Automatically transcribe and summarize meetings, extracting key action items and decisions. Integrates with Zoom, Teams, and Google Meet.",
    techStack: ["Next.js", "OpenAI Whisper", "TypeScript", "Supabase"],
    demoUrl: "https://meeting-ai.example.com",
    githubUrl: null,
    isForSale: false,
    price: null,
    collaborationNeeds: [
      {
        role: "Sales Lead",
        profile: "B2B Sales Expert",
        compensation: "Equity + Commission",
        description: "Looking for experienced enterprise sales professional"
      }
    ],
    status: "seeking-collaboration",
    upvotes: 34,
    views: 723,
    createdBy: "user-1",
    createdAt: "2024-02-12",
    updatedAt: "2024-02-15",
    featured: false,
    category: "Productivity",
    tags: ["Meetings", "Transcription", "Enterprise", "Productivity"]
  }
];

// Technology options for filters
export const techStackOptions = [
  "Next.js", "React", "TypeScript", "JavaScript", "Python", "Node.js",
  "OpenAI", "TensorFlow", "PyTorch", "FastAPI", "Django", "Flask",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes",
  "Tailwind", "Material-UI", "Firebase", "Supabase", "Vercel",
  "Flutter", "React Native", "Vue.js", "Angular", "Go", "Rust"
];

// Categories for projects
export const projectCategories = [
  "AI Assistant", "Customer Service", "Content Creation", "Developer Tools",
  "FinTech", "E-commerce", "Productivity", "Healthcare", "Education",
  "Marketing", "Sales", "Analytics", "Security", "Mobile App"
];

// Collaboration roles
export const collaborationRoles = [
  "Co-founder", "CTO", "CMO", "Technical Lead", "Marketing Lead",
  "Sales Lead", "Business Development", "Product Manager", "Designer",
  "Financial Advisor", "Legal Advisor", "Domain Expert"
];

// Expertise areas
export const expertiseAreas = [
  "Machine Learning", "Deep Learning", "Natural Language Processing",
  "Computer Vision", "Data Science", "Software Engineering",
  "Product Management", "Marketing", "Sales", "Business Development",
  "UI/UX Design", "DevOps", "Cloud Architecture", "Mobile Development",
  "Web Development", "SaaS", "E-commerce", "FinTech", "HealthTech",
  "EdTech", "Content Marketing", "Growth Hacking", "Customer Success",
  "Legal", "Finance", "Operations", "HR"
];

// Project status options
export const projectStatuses = [
  { value: "seeking-collaboration", label: "Seeking Collaboration" },
  { value: "for-sale", label: "For Sale" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "completed", label: "Completed Project" }
];

// Compensation types
export const compensationTypes = [
  "Equity Only", "Salary Only", "Equity + Salary", "Equity + Commission",
  "Commission Only", "Project Based", "Hourly", "Revenue Share"
];
