import SectionTitle from '@/components/common/SectionTitle';
import InternshipCard from '@/components/common/InternshipCard';

const Internships = () => {
  const internships = [
    {
      company: 'Tech Company Inc.',
      role: 'Software Development Intern',
      duration: 'June 2024 - August 2024',
      location: 'San Francisco, CA',
      logo: 'https://miaoda-site-img.s3cdn.medo.dev/images/134866c8-9531-448b-b179-54961fb478a4.jpg',
      responsibilities: [
        'Developed responsive web components using React and TypeScript',
        'Collaborated with design team to implement UI/UX improvements',
        'Participated in code reviews and contributed to team documentation',
        'Implemented unit tests achieving 85% code coverage',
        'Optimized application performance reducing load time by 30%'
      ],
      technologies: ['React', 'TypeScript', 'Git', 'Jest', 'Figma']
    },
    {
      company: 'Startup Inc.',
      role: 'Frontend Developer Intern',
      duration: 'January 2024 - May 2024',
      location: 'Remote',
      logo: 'https://miaoda-site-img.s3cdn.medo.dev/images/58c3550b-77b7-4861-8309-2c25ea9e2a00.jpg',
      responsibilities: [
        'Built user interfaces for web applications using modern frameworks',
        'Implemented accessibility features following WCAG 2.1 AA standards',
        'Integrated RESTful APIs and handled asynchronous data fetching',
        'Worked in an Agile environment with bi-weekly sprints',
        'Mentored junior developers and conducted knowledge sharing sessions'
      ],
      technologies: ['React', 'Tailwind CSS', 'REST APIs', 'Git', 'Jira']
    },
    {
      company: 'Digital Solutions Ltd.',
      role: 'Full Stack Developer Intern',
      duration: 'June 2023 - December 2023',
      location: 'New York, NY',
      logo: 'https://miaoda-site-img.s3cdn.medo.dev/images/ab942e57-d21c-4530-8fe7-c7f433a14d43.jpg',
      responsibilities: [
        'Developed full-stack features for client management system',
        'Created and maintained database schemas using PostgreSQL',
        'Implemented authentication and authorization using JWT',
        'Deployed applications to cloud platforms (AWS)',
        'Collaborated with cross-functional teams to deliver projects on time'
      ],
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'Docker']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Professional Experience"
          subtitle="My internship journey and professional growth in the tech industry"
        />

        <div className="relative">
          <div className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'xl:pr-[calc(50%+2rem)]' : 'xl:pl-[calc(50%+2rem)]'
                }`}
              >
                <div className="hidden xl:block absolute top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: 'calc(50% - 0.5rem)'
                  }}
                />
                <InternshipCard {...internship} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 xl:p-12 text-center">
          <h3 className="text-2xl xl:text-3xl font-bold mb-4">Looking for Opportunities</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base xl:text-lg">
            I'm actively seeking full-time opportunities where I can contribute my skills and continue growing 
            as a developer. If you're looking for a dedicated team member who's passionate about technology, 
            let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internships;
