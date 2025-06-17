import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SkillCard } from "@/components/SkillCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              A passionate developer focused on creating beautiful and functional web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/projects">
                  View My Work <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-muted/30 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Code className="h-8 w-8 text-primary" />}
              title="Frontend Development"
              description="Creating responsive, accessible, and beautiful user interfaces using React, TypeScript, and modern CSS."
            />
            <SkillCard 
              icon={<Layers className="h-8 w-8 text-primary" />}
              title="Backend Systems"
              description="Building robust server-side applications with Node.js, Express, and database technologies."
            />
            <SkillCard 
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Performance Optimization"
              description="Enhancing application speed and user experience through efficient code and best practices."
            />
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button variant="link" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="group rounded-lg border overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-151271495074${i}-96661edf6258?w=600&auto=format&fit=crop`} 
                    alt={`Project ${i}`} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary py-1 px-2 rounded">React</span>
                    <span className="text-xs bg-primary/10 text-primary py-1 px-2 rounded">TypeScript</span>
                    <span className="text-xs bg-primary/10 text-primary py-1 px-2 rounded">Node.js</span>
                  </div>
                  <Button size="sm" variant="outline">View Project</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}