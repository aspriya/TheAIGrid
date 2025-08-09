'use client';

import { useState, useMemo } from 'react';
import { 
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const ProjectGrid = ({ 
  projects, 
  title = "Projects", 
  showFilters = true, 
  showSearch = true,
  currentUser 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedTech, setSelectedTech] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  // Get unique categories and technologies from projects
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(p => p.category).filter(Boolean))];
    return cats.sort();
  }, [projects]);

  const technologies = useMemo(() => {
    const techs = [...new Set(projects.flatMap(p => p.techStack || []))];
    return techs.sort();
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      // Search filter
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        const matchesSearch = 
          project.name.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          project.techStack?.some(tech => tech.toLowerCase().includes(search)) ||
          project.category?.toLowerCase().includes(search);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory && project.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus && project.status !== selectedStatus) {
        return false;
      }

      // Technology filter
      if (selectedTech.length > 0) {
        const hasMatchingTech = selectedTech.some(tech => 
          project.techStack?.includes(tech)
        );
        if (!hasMatchingTech) return false;
      }

      // Price filter
      if (priceFilter) {
        switch (priceFilter) {
          case 'free':
            if (project.isForSale) return false;
            break;
          case 'paid':
            if (!project.isForSale) return false;
            break;
          case 'under-100':
            if (!project.isForSale || project.price >= 100) return false;
            break;
          case 'under-500':
            if (!project.isForSale || project.price >= 500) return false;
            break;
          case 'over-500':
            if (!project.isForSale || project.price < 500) return false;
            break;
        }
      }

      return true;
    });

    // Sort projects (Spotlight Boost first, then existing sort)
    filtered.sort((a, b) => {
      // Spotlight Boost precedence
      const aSpot = a.spotlight ? 1 : 0;
      const bSpot = b.spotlight ? 1 : 0;
      if (aSpot !== bSpot) return bSpot - aSpot;

      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'most-viewed':
          return (b.views || 0) - (a.views || 0);
        case 'price-low':
          const aPrice = a.isForSale ? a.price || 0 : 0;
          const bPrice = b.isForSale ? b.price || 0 : 0;
          return aPrice - bPrice;
        case 'price-high':
          const aPriceHigh = a.isForSale ? a.price || 0 : 0;
          const bPriceHigh = b.isForSale ? b.price || 0 : 0;
          return bPriceHigh - aPriceHigh;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedCategory, selectedStatus, selectedTech, priceFilter, sortBy]);

  const addTechFilter = (tech) => {
    if (!selectedTech.includes(tech)) {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const removeTechFilter = (tech) => {
    setSelectedTech(selectedTech.filter(t => t !== tech));
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedStatus('');
    setSelectedTech([]);
    setPriceFilter('');
    setSortBy('newest');
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedStatus || selectedTech.length > 0 || priceFilter;

  const statusOptions = [
    { value: 'seeking-collaboration', label: 'Seeking Collaboration' },
    { value: 'open-to-collaboration', label: 'Open to Collaboration' },
    { value: 'showcase-only', label: 'Showcase Only' },
    { value: 'for-sale', label: 'For Sale' },
    { value: 'completed', label: 'Completed' }
  ];

  const priceOptions = [
    { value: 'free', label: 'Free Projects' },
    { value: 'paid', label: 'Paid Projects' },
    { value: 'under-100', label: 'Under $100' },
    { value: 'under-500', label: 'Under $500' },
    { value: 'over-500', label: '$500+' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'most-viewed', label: 'Most Viewed' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {hasActiveFilters && ` (filtered from ${projects.length})`}
          </p>
          {/* Spotlight hint */}
          <p className="text-xs text-amber-700 mt-1">
            Spotlight Boost projects appear first in results.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {showFilters && (
            <Button
              variant="outline"
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className="flex items-center gap-2"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              Filters
              {hasActiveFilters && (
                <Badge variant="blue" size="sm">
                  {(selectedCategory ? 1 : 0) + 
                   (selectedStatus ? 1 : 0) + 
                   selectedTech.length + 
                   (priceFilter ? 1 : 0)}
                </Badge>
              )}
            </Button>
          )}

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects by name, description, or technology..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}

      {/* Filters Panel */}
      {showFilters && showFiltersPanel && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                Clear All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">All Statuses</option>
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pricing</label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">All Projects</option>
                {priceOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Technology Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addTechFilter(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Add Technology</option>
                {technologies.filter(tech => !selectedTech.includes(tech)).map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected Technologies */}
          {selectedTech.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Technologies ({selectedTech.length})
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedTech.map(tech => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm"
                  >
                    {tech}
                    <button
                      onClick={() => removeTechFilter(tech)}
                      className="hover:text-red-600 transition-colors"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              showCreator={true}
              currentUser={currentUser}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              {hasActiveFilters 
                ? "Try adjusting your filters or search terms to find more projects."
                : "Be the first to share a project with the community!"
              }
            </p>
            {hasActiveFilters && (
              <Button
                onClick={clearAllFilters}
                variant="outline"
                className="mr-3"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
