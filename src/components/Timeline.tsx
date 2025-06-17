import { FC } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l border-muted-foreground/30 ml-3 pl-8 space-y-10">
      {items.map((item, index) => (
        <div key={index} className="relative">
          {/* Circle marker */}
          <div className="absolute w-6 h-6 bg-background border-2 border-primary rounded-full -left-[39px] flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded mb-2">
              {item.year}
            </span>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}