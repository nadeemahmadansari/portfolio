import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col gap-4 mb-12", alignmentClasses[align], className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
        <span className="block h-1.5 w-12 bg-gradient-to-r from-primary to-accent mt-2 rounded-full mx-auto md:mx-0" 
              style={{ marginInline: align === "center" ? "auto" : align === "right" ? "0 0" : "0 auto" }}>
        </span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-[600px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
