import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/common/SectionTitle';
import { Download, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality work that exceeds expectations'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving measurable results and continuous improvement'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Deeply passionate about technology and creating meaningful solutions'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background, skills, and what drives me"
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 xl:order-1 space-y-6">
            <h3 className="text-2xl xl:text-3xl font-bold text-foreground">
              Hello! I'm a Full Stack Developer
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software developer with a strong foundation in both frontend and backend technologies. 
                My journey in tech began with a curiosity about how things work, which evolved into a deep commitment 
                to creating elegant, efficient solutions.
              </p>
              <p>
                With experience in modern frameworks like React, Node.js, and various databases, I enjoy tackling 
                complex challenges and turning ideas into reality. I believe in writing clean, maintainable code 
                and following industry best practices.
              </p>
              <p>
                Beyond coding, I'm a strong believer in continuous learning and collaboration. I actively participate 
                in developer communities, contribute to open-source projects, and stay updated with the latest 
                technology trends.
              </p>
            </div>
            <Button size="lg">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="order-1 xl:order-2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6" />
              <div className="relative bg-muted rounded-2xl overflow-hidden h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card key={item.title} className="hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 xl:p-12 text-center">
          <h3 className="text-2xl xl:text-3xl font-bold mb-4">Career Objectives</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base xl:text-lg">
            I'm seeking opportunities to contribute to innovative projects where I can leverage my technical skills 
            and creativity to build impactful solutions. My goal is to work with talented teams that value quality, 
            collaboration, and continuous growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
