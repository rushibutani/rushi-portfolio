export function Skeleton({
  className = "",
  variant = "text",
}: {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}) {
  const baseStyles = "animate-pulse bg-muted";

  const variants = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-md",
  };

  return <div className={`${baseStyles} ${variants[variant]} ${className}`} />;
}

export function CardSkeleton() {
  return (
    <div className="glass-card p-6 space-y-4">
      <Skeleton variant="rectangular" className="w-full h-48" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
      <div className="flex gap-2 mt-4">
        <Skeleton variant="rectangular" className="w-16 h-6" />
        <Skeleton variant="rectangular" className="w-20 h-6" />
        <Skeleton variant="rectangular" className="w-16 h-6" />
      </div>
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="py-24 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <Skeleton variant="text" className="w-32 h-4 mx-auto mb-4" />
          <Skeleton variant="text" className="w-64 h-12 mx-auto mb-4" />
          <Skeleton variant="text" className="w-96 h-6 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}
