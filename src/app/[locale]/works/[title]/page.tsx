"use client";

import { use, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { TbX } from "react-icons/tb";
import { Link } from "@/../i18n/navigation";
import { ProjectContent } from "@/features/works";

export default function FullProjectPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = use(params);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-p-color/40 backdrop-blur-sm"
    >
      <div className="min-h-screen px-4 py-10 sm:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl rounded-2xl border border-s-color/10 bg-white shadow-2xl"
        >
          {/* sticky close bar */}
          <div className="sticky top-0 z-10 flex justify-end rounded-t-2xl bg-white/90 p-4 backdrop-blur-sm">
            <Link
              href="/works"
              scroll={false}
              aria-label="Close"
              className="flex items-center gap-1.5 rounded-full border border-s-color/15 px-3 py-1.5 text-sm font-semibold text-p-color transition-colors duration-200 hover:bg-p-color/5"
            >
              <TbX size={16} />
              Close
            </Link>
          </div>

          <ProjectContent title={title} />
        </motion.div>
      </div>
    </motion.main>
  );
}