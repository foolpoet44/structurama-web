import { cn } from "@/lib/utils";

interface LevelIndicatorProps {
  level: "expert" | "advanced" | "intermediate" | "beginner";
  title: string;
  subtitle?: string;
  description?: string;
}

const levelColors = {
  expert: "border-l-level-expert bg-red-50",
  advanced: "border-l-level-advanced bg-orange-50",
  intermediate: "border-l-level-intermediate bg-yellow-50",
  beginner: "border-l-level-beginner bg-green-50",
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
        "border-l-4 p-4 rounded-r-lg h-full flex flex-col justify-center",
        levelColors[level]
      )}
    >
      <div className="text-xs text-muted-foreground mb-1">{title}</div>
      <div className="text-xl font-bold text-foreground">{levelLabels[level]}</div>
      {subtitle && (
        <div className="text-xs text-muted-foreground mt-1">{subtitle}</div>
      )}
      {description && (
        <div className="text-[10px] text-muted-foreground mt-0.5">{description}</div>
      )}
    </div>
  );
};
