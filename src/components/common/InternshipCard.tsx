import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

interface InternshipCardProps {
  company: string;
  role: string;
  duration: string;
  location?: string;
  logo?: string;
  responsibilities: string[];
  technologies: string[];
}

const InternshipCard = ({
  company,
  role,
  duration,
  location,
  logo,
  responsibilities,
  technologies
}: InternshipCardProps) => {
  return (
    <Card className="hover:shadow-hover transition-all duration-300">
      <CardHeader>
        <div className="flex items-start gap-4">
          {logo && (
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{role}</CardTitle>
            <CardDescription className="text-base font-semibold text-foreground">
              {company}
            </CardDescription>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
