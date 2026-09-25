import { Suspense } from "react";
import {getAllPosts,Posts,PostsSkeleton} from "@/features/blog";

export default function BlogOnHome({ locale }: { locale: string }) {
  return (
    <section className="p-4 rounded-lg shadow-md mt-40">
      <h2>Code Corner</h2>
      <Suspense fallback={<PostsSkeleton />}>
        <RecentPosts locale={locale} />
      </Suspense>
    </section>
  );
}

async function RecentPosts({ locale }: { locale: string }) {
  const posts = await getAllPosts({ locale, limit: 2 });
  return <Posts data={posts} />;
}
