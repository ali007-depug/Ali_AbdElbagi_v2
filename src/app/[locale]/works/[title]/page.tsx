"use client";

import { use,useLayoutEffect } from "react";
import ProjectContent from "../../_components/ProjectContent";
import { motion } from "framer-motion";


export default function FullProjectPage({ params }: { params: Promise<{ title: string }> }) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { title } = use(params);

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-50/50 pt-28 pb-16"
    >
      <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-xl border border-slate-100 py-6 my-6">
        {/* Render the identical shared layout component */}
        <ProjectContent title={title} />
      </div>
    </motion.main>
  );
}