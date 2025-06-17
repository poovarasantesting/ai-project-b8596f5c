import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}