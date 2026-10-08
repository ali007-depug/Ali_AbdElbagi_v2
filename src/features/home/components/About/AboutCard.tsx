interface AboutCardProps {
  cardDetails: string;
  icon: React.ReactNode;
}

export default function AboutCard({ cardDetails, icon }: AboutCardProps) {
  return (
    <div
      className="
        flex flex-col items-center justify-center gap-3 @sm:gap-4 text-center
        rounded-2xl border border-white/10 bg-white/5
        p-4 @sm:p-6 @max-sm:min-h-30 @sm:min-h-40
        backdrop-blur transition-all duration-300
        hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/10
      "
    >
      <div className="flex size-11 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
        {icon}
      </div>

      <p className="text-sm @sm:text-base font-medium text-white/90">
        {cardDetails}
      </p>
    </div>
  );
}