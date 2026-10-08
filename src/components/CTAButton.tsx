import { Link } from "@/../i18n/navigation";

interface CTAButtonProps {
  isLink: boolean;
  href?: string;
  to?: string;
  action: string;
  icon: React.ReactNode;
  customStyle: string;
}

export default function CTAButton({
  isLink,
  href,
  to,
  action,
  icon,
  customStyle,
}: CTAButtonProps) {
  const base =
    "flex items-center justify-center gap-2 px-8 py-4 min-w-[200px] transition-all duration-300 ease-in-out";

  if (isLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${customStyle}`}
      >
        <span>{action}</span>
        <span className="flex items-center">{icon}</span>
      </a>
    );
  }

  return (
    <Link href={`${to}`} className={`${base} ${customStyle}`}>
      <span>{action}</span>
      <span className="flex items-center">{icon}</span>
    </Link>
  );
}