import { Link } from "@/i18n/navigation";
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
  if (isLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center px-8 py-4 min-w-[215px] justify-center ${customStyle}  transition-all duration-300 ease-in-out `}
      >
        <span className="block">{action} </span>
        <span className="block">{icon}</span>
      </a>
    );
  }

  return (
    <Link
      href={`${to}`}
      className={`flex items-center px-8 py-4 gap-2 transition-all duration-300 ease-in-out ${customStyle}`}
    >
      <span className="block">{action}</span>
      <span className="block">{icon}</span>
    </Link>
  );
}
