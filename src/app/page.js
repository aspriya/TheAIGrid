import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProjectCard from "@/components/ui/ProjectCard";
import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";
import { mockProjects, mockUsers } from "@/data/mockData";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

        <PageContainer>
          <div className="text-center py-12 relative z-10 w-full">
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-gray-900 mb-8 leading-tight">
              The AI Project
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block md:inline">
                {" "}
                Marketplace
              </span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              Connecting AI creators with collaborators and opportunities.
              <span className="block mt-2">
                Whether you&apos;re building, buying, or partnering - find your
                next venture here.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 rounded-2xl min-w-[200px]"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Explore Projects
                </Button>
              </Link>
              <Link href="/projects/create">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 text-gray-800 hover:text-blue-600 font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-2xl min-w-[200px]"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Post Your Project
                </Button>
              </Link>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Features Section - "How It Works" */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>

        <PageContainer>
          <div className="py-10 md:py-24 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                How It Works
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block md:inline font-bold">
                {" "}TheAIGrid{" "}
                </span>       
                brings together three essential roles in the AI
                ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 px-4 md:px-0">
              <Card
                padding="none"
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white mx-auto max-w-sm md:max-w-none"
              >
                <div className="p-6 md:p-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <svg
                      className="h-7 w-7 md:h-8 md:w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
                    For Creators
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                    Showcase your AI projects, find co-founders, and turn your
                    ideas into successful ventures with the right partners.
                  </p>
                </div>
              </Card>

              <Card
                padding="none"
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white mx-auto max-w-sm md:max-w-none"
              >
                <div className="p-6 md:p-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <svg
                      className="h-7 w-7 md:h-8 md:w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
                    For Collaborators
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                    Lend your expertise in business, marketing, or domain
                    knowledge to promising AI projects and build something
                    amazing.
                  </p>
                </div>
              </Card>

              <Card
                padding="none"
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white mx-auto max-w-sm md:max-w-none"
              >
                <div className="p-6 md:p-8">
                  <div className="h-14 w-14 md:h-16 md:w-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <svg
                      className="h-7 w-7 md:h-8 md:w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
                    For Acquirers
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                    Discover mature AI applications and micro-businesses ready
                    for acquisition, investment, or partnership opportunities.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Featured Projects Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        
        <div className="py-12 md:py-24">
          {/* Featured Projects Section */}
          <PageContainer>
            <div className="mb-16 md:mb-24">
              <div className="text-center mb-12 md:mb-16 px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                  Featured Projects
                </h2>
                <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Discover innovative AI projects from talented creators around the
                  world
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
                {mockProjects.slice(0, 3).map((project) => {
                  const creator = mockUsers.find(
                    (user) => user.id === project.createdBy
                  );
                  return (
                    <ProjectCard
                      key={project.id}
                      className="h-[400px] md:h-[480px] mx-auto max-w-sm md:max-w-none"
                      project={{
                        id: project.id,
                        title: project.name,
                        description: project.description,
                        category: project.category,
                        status:
                          project.status === "seeking-collaboration"
                            ? "Seeking Partners"
                            : project.status === "for-sale"
                            ? "For Sale"
                            : "Available",
                        technologies: project.techStack.slice(0, 3),
                        creator: {
                          name: creator?.name || "Unknown",
                          initials:
                            creator?.name
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("") || "UN",
                          role: "Creator",
                        },
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </PageContainer>

          {/* CTA Section */}
          <PageContainer>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden mx-4 md:mx-0">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                  Ready to Build the Future of AI?
                </h2>
                <p className="text-base md:text-2xl mb-8 md:mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of creators, collaborators, and entrepreneurs
                  building tomorrow&apos;s AI ventures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="!bg-white !text-blue-700 hover:!bg-blue-500 hover:!text-white shadow-xl hover:shadow-2xl font-bold hover:font-extrabold px-8 md:px-10 py-3 md:py-4 rounded-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300"
                  >
                    <span className="flex items-center gap-2 font-bold text-base md:text-lg transition-all duration-300">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      Get Started Today
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>

    </div>
  );
}
