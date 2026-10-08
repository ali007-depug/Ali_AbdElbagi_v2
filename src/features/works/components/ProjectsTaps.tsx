"use client";
import { ProjcetsProvider } from "@/context/ProjectContext";
import TapList from "./TapList";
import WorkCards from "./CardsFilter";

export default function ProjectsTaps() {
  return (
    <ProjcetsProvider>
      <TapList />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <WorkCards numberOfCards={20} />
      </div>
    </ProjcetsProvider>
  );
}