export default function TagsSkeleton() {
  const skeletonTags = Array.from({ length: 8 }); // Show 8 placeholder tags

  return (
    <div className="flex flex-col gap-2">
      {skeletonTags.map((_, index) => (
        <div
          key={index}
          className="flex gap-2 items-center justify-center mb-2 bg-white/20 animate-pulse px-2 min-w-[200px] py-1.5 rounded-md"
        >
          {/* Tag name placeholder */}
          <div className="bg-gray-400/30 h-5 min-w-[120px] rounded" />
          
          {/* Tag count badge placeholder */}
          <div className="bg-gray-400/50 h-5 w-8 rounded-full" />
        </div>
      ))}
    </div>
  );
}