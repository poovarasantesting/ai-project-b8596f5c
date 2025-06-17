import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/Timeline";

export default function AboutPage() {
  // Sample timeline data
  const timelineItems = [
    {
      year: "2023",
      title: "Senior Developer",
      description: "Lead developer at a cutting-edge tech company, overseeing multiple projects and mentoring junior team members.",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      description: "Worked on a variety of projects using React, Node.js and cloud technologies, delivering solutions for enterprise clients.",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      description: "Started my professional journey focusing on creating responsive user interfaces and learning modern web development practices.",
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      description: "Graduated with honors, specializing in software engineering and web technologies.",
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="aspect-square rounded-full overflow-hidden bg-muted mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Name</h2>
            <p className="text-muted-foreground mb-4">Full Stack Developer</p>
            <div className="space-y-1 mb-6">
              <p className="text-sm">
                <span className="font-medium">Location:</span> City, Country
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span> your.email@example.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Bio</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                Hi there! I'm a passionate developer with over 5 years of experience creating web applications. 
                I specialize in building responsive, accessible, and performant web experiences that solve real problems.
              </p>
              <p>
                My journey in web development started when I built my first website for a local business. 
                Since then, I've worked with startups and established companies, helping them bring their 
                ideas to life through clean code and thoughtful design.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting 
                with new cooking recipes. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience Timeline</h2>
            <Timeline items={timelineItems} />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-medium mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"].map((skill) => (
                    <span key={skill} className="text-sm bg-primary/10 text-primary py-1 px-2 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-medium mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API", "Firebase"].map((skill) => (
                    <span key={skill} className="text-sm bg-primary/10 text-primary py-1 px-2 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-medium mb-2">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Netlify"].map((skill) => (
                    <span key={skill} className="text-sm bg-primary/10 text-primary py-1 px-2 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-medium mb-2">Design & Other</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Responsive Design", "UI/UX", "Accessibility", "Performance", "SEO", "Testing"].map((skill) => (
                    <span key={skill} className="text-sm bg-primary/10 text-primary py-1 px-2 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}