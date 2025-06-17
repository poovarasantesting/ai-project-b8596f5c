import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product search, shopping cart, and checkout functionality.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&auto=format&fit=crop",
    category: "Web Application",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
    category: "Web Application",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description: "Interactive dashboard for tracking expenses, income, and savings with data visualization.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop",
    category: "Dashboard",
    tags: ["Next.js", "Chart.js", "PostgreSQL", "Prisma"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Weather Application",
    description: "Weather forecast application with location tracking and detailed meteorological information.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&auto=format&fit=crop",
    category: "Mobile App",
    tags: ["React Native", "Weather API", "Geolocation"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A professional portfolio website to showcase projects and skills to potential clients and employers.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop",
    category: "Website",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "A community-driven platform for sharing recipes, with search, ratings, and comments.",
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?w=600&auto=format&fit=crop",
    category: "Web Application",
    tags: ["React", "GraphQL", "MongoDB", "Apollo"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === "All" || project.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-muted-foreground mb-8">
        Browse through my latest work and personal projects.
      </p>
      
      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group rounded-lg border overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary py-1 px-2 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}