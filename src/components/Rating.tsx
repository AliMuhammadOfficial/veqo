import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const Rating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => (
  <div className={cn("flex items-center gap-1", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < Math.floor(rating)
            ? "text-primary fill-primary"
            : "text-muted-foreground"
        )}
      />
    ))}
    <span className="text-sm text-muted-foreground ml-1">{rating}</span>
  </div>
);

export default Rating;
