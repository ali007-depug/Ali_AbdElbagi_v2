export default function TagsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-8 shrink-0 animate-pulse rounded-full bg-gray-200"
          style={{ width: `${70 + (i % 3) * 20}px` }}
        />
      ))}
    </>
  );
}