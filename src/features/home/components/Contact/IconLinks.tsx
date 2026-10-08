interface IconLinksProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export default function IconsLinks({ name, icon, href }: IconLinksProps) {
  return (
    <a
      href={href}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="flex size-11 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-400"
    >
      {icon}
    </a>
  );
}