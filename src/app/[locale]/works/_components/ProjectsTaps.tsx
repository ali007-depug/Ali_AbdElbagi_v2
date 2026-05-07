"use client";
import { ProjcetsProvider } from "@/src/context/ProjectContext";
import TapList from "./TapList";
import WorkCards from "@/src/components/WorkCard";
export default function ProjectsTaps() {
  return (
    <ProjcetsProvider>
      <TapList />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[15px]">
        <WorkCards numberOfCards={20} />
      </div>
    </ProjcetsProvider>
  );
}
