export default function PostsSkeleton() {
  return (
    <div className="space-y-8">
      {/* featured post skeleton */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white md:flex-row">
        <div className="aspect-video w-full animate-pulse bg-gray-200 md:aspect-auto md:w-[45%]" />
        <div className="flex flex-1 flex-col justify-center gap-3 p-6 md:p-8">
          <div className="h-5 w-16 animate-pulse rounded-full bg-gray-200" />
          <div className="h-7 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-gray-200 mt-2" />
        </div>
      </div>

      {/* grid skeleton */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div className="aspect-video animate-pulse bg-gray-200" />
            <div className="flex flex-col gap-2 p-4">
              <div className="h-5 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}