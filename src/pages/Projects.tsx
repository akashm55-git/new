import { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/common/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack online shopping platform with payment integration, user authentication, and admin dashboard',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/d2f54a22-8827-4cee-a082-36aea69e480f.jpg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task tracker with drag-and-drop functionality and team collaboration features',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/a349d632-db24-4d6f-8837-ee54e0783362.jpg',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather forecast application with data visualization and location-based weather updates',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/7bc5829c-5503-4e7e-bfa6-d00a626e4f44.jpg',
      techStack: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user authentication, posts, comments, and likes',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/6f893723-6292-40d0-9712-6871c0b43fee.jpg',
      techStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/4fb480a2-d807-443c-bbc2-7e8c730eb14e.jpg',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with markdown support, comments, and user profiles',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/2a3c2f4d-7069-48a1-94a3-3bf557f66414.jpg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
