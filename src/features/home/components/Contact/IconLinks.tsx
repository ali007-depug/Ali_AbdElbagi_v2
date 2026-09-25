
interface IconLinksProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export default function IconsLinks({ name, icon, href }: IconLinksProps) {
  return (
    <>
      <a href={href} title={name} target="_blank" className="hover:scale-120 transition-all duration-300 ease-in-out">
      {icon}
      </a>
    </>
  );
}
