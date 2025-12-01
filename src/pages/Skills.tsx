import SectionTitle from '@/components/common/SectionTitle';
import SkillCard from '@/components/common/SkillCard';
import { Code2, Database, Wrench, Users, Lightbulb, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'JavaScript', icon: Code2, level: 90 },
        { name: 'Python', icon: Code2, level: 85 },
        { name: 'Java', icon: Code2, level: 80 },
        { name: 'C++', icon: Code2, level: 75 },
        { name: 'HTML/CSS', icon: Code2, level: 95 }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: Wrench,
      skills: [
        { name: 'React.js', icon: Wrench, level: 90 },
        { name: 'Node.js', icon: Wrench, level: 85 },
        { name: 'Express.js', icon: Wrench, level: 85 },
        { name: 'Tailwind CSS', icon: Wrench, level: 90 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Database,
      skills: [
        { name: 'Git & GitHub', icon: Database, level: 90 },
        { name: 'VS Code', icon: Database, level: 95 },
        { name: 'Figma', icon: Database, level: 80 },
        { name: 'MongoDB', icon: Database, level: 85 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem Solving', icon: Lightbulb, level: 90 },
        { name: 'Team Collaboration', icon: Users, level: 85 },
        { name: 'Communication', icon: MessageSquare, level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and professional competencies"
        />

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl xl:text-3xl font-bold">{category.category}</h3>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 xl:p-12">
          <h3 className="text-2xl xl:text-3xl font-bold mb-6 text-center">Continuous Learning</h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
            Currently exploring cloud computing, DevOps practices, and advanced system design patterns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Docker', 'Kubernetes', 'AWS', 'TypeScript', 'GraphQL', 'Next.js'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
