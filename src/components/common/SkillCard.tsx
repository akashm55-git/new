import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level?: number;
}

const SkillCard = ({ name, icon: Icon, level }: SkillCardProps) => {
  return (
    <Card className="hover:shadow-hover transition-all duration-300 hover:scale-105">
      <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
        <div className="p-4 bg-primary/10 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-base font-semibold text-center">{name}</h3>
        {level && (
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${level}%` }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
