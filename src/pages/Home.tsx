import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-6xl font-bold text-foreground">
                Hi, I'm <span className="gradient-text">Akash M</span>
              </h1>
              <p className="text-xl xl:text-2xl text-muted-foreground">
                Full Stack Developer & Creative Problem Solver
              </p>
            </div>

            <p className="text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building elegant solutions to complex problems. 
              Specializing in modern web technologies and creating exceptional user experiences.
            </p>

            <div className="flex flex-col xl:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/projects">
                  <Code className="h-5 w-5 mr-2" />
                  View Projects
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pt-12">
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
                <Code className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable and scalable code following best practices
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Professional Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Proven track record with multiple successful internships
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Always Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously expanding skills and staying current with technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
