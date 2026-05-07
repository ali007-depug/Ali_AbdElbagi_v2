export default function PostsSkeleton() {
  // Create an array of 5 items to show while loading
  const skeletonItems = Array.from({ length: 5 });

  return (
    <div className="w-full space-y-4">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="flex items-center odd:bg-s-color/30 rounded-md even:bg-bg-color/10 py-2.5 px-3 justify-center sm:gap-15 @container animate-pulse"
        >
          <div className="flex max-sm:flex-col gap-5 w-full items-center sm:justify-evenly">
            
            {/* Details Skeleton */}
            <div className="flex p-2 flex-col gap-2 w-full sm:w-[50%]">
              {/* Index Number Skeleton */}
              <div className="h-8 w-8 bg-sky-400/20 rounded mx-auto mb-2" />
              
              <div className="flex flex-col items-center gap-4">
                {/* Title Skeleton */}
                <div className="h-7 w-[80%] bg-gray-500/30 rounded" />
                
                {/* Description Skeleton (Two lines) */}
                <div className="space-y-2 w-full flex flex-col items-center">
                  <div className="h-4 w-full bg-gray-500/20 rounded" />
                  <div className="h-4 w-[60%] bg-gray-500/20 rounded" />
                </div>
              </div>

              {/* Date Skeleton */}
              <div className="h-4 w-24 bg-gray-500/20 rounded mt-2" />
            </div>

            {/* Thumbnail Skeleton */}
            <div className="max-sm:max-w-[90%] w-full sm:w-[50%] md:w-[45%] lg:w-[35%] aspect-video border-2 border-sky-900/50 bg-sky-700/50 rounded-lg max-sm:-order-1" />
          </div>
        </div>
      ))}
    </div>
  );
}