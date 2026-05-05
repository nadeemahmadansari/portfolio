import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SkillBadge({ name, icon, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group",
        className
      )}
    >
      {icon && <span className="text-primary group-hover:scale-110 transition-transform">{icon}</span>}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
