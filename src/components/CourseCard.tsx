import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  badges?: Array<{ type: "selection" | "new"; label: string }>;
  variant?: "prd" | "cto" | "hr" | "sw" | "udemy" | "ai";
  isOnline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  courseId?: string;
}

const variantStyles = {
  prd: "bg-course-prd border-2 border-foreground/20",
  cto: "bg-course-cto border-l-4 border-l-foreground/40",
  hr: "bg-course-hr",
  sw: "bg-course-sw border border-accent/50",
  udemy: "bg-course-udemy",
  ai: "bg-course-ai",
};

const sizeStyles = {
  sm: "px-2 py-1.5 text-xs",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

export const CourseCard = ({
  title,
  badges = [],
  variant = "prd",
  isOnline = false,
  className,
  size = "md",
  courseId,
}: CourseCardProps) => {
  const content = (
    <div
      className={cn(
        "rounded-md transition-all duration-200",
        courseId ? "hover:shadow-lg hover:scale-[1.02] cursor-pointer" : "cursor-default",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <div className="flex flex-wrap gap-1 mb-1">
        {badges.map((badge, idx) => (
          <span
            key={idx}
            className={cn(
              "px-1.5 py-0.5 rounded text-[10px] font-semibold",
              badge.type === "selection"
                ? "bg-badge-selection text-white"
                : "bg-badge-new text-foreground"
            )}
          >
            {badge.label}
          </span>
        ))}
      </div>
      <div className="font-medium leading-tight">
        {isOnline && <span className="text-muted-foreground">Ⓞ</span>} {title}
      </div>
    </div>
  );

  if (courseId) {
    return <Link to={`/course/${courseId}`}>{content}</Link>;
  }

  return content;
};
