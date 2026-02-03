import { cn } from "@/lib/utils";

interface LevelIndicatorProps {
  level: "expert" | "advanced" | "intermediate" | "beginner";
  title: string;
  subtitle?: string;
  description?: string;
}

const levelColors = {
  expert: "border-l-4 border-l-level-expert bg-gradient-to-r from-red-100/80 to-red-50/40",
  advanced: "border-l-4 border-l-level-advanced bg-gradient-to-r from-orange-100/80 to-orange-50/40",
  intermediate: "border-l-4 border-l-level-intermediate bg-gradient-to-r from-yellow-100/80 to-yellow-50/40",
  beginner: "border-l-4 border-l-level-beginner bg-gradient-to-r from-green-100/80 to-green-50/40",
};

const levelLabels = {
  expert: "전문가",
  advanced: "고급",
  intermediate: "중급",
  beginner: "초급",
};

export const LevelIndicator = ({
  level,
  title,
  subtitle,
  description,
}: LevelIndicatorProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg h-full flex flex-col justify-center shadow-sm",
        levelColors[level]
      )}
    >
      <div className="text-xs font-medium text-muted-foreground mb-1">{title}</div>
      <div className="text-xl font-bold text-foreground tracking-tight">{levelLabels[level]}</div>
      {subtitle && (
        <div className="text-xs text-muted-foreground mt-1 leading-tight">{subtitle}</div>
      )}
      {description && (
        <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{description}</div>
      )}
    </div>
  );
};
