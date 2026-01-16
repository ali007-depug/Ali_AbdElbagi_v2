interface AboutCardProps {
  cardDetails: string;
  icon: React.ReactNode;
}
export default function AboutCard({ cardDetails, icon }: AboutCardProps) {
  return (
    <div
      className="
        flex flex-col @max-sm:gap-3 @sm:gap-5 items-center text-center 
        @max-sm:p-2 @sm:p-6 rounded-xl bg-white backdrop-blur 
        border border-sky-500  
        shadow-sm transition-all duration-300
        hover:shadow-lg hover:-translate-y-1 
        hover:border-s-color @max-sm:min-h-30 @sm:min-h-50  justify-center
      "
    >
      <div className="">{icon}</div>

      <p className="@max-sm:text-sm @sm:text-base text-center text-p-color">
        {cardDetails}
      </p>
    </div>
  );
}
