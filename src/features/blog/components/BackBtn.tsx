import { Link } from "@/../i18n/navigation";
interface BackButtonProps {
  backTo: string;
  btnText?: string;
  customStyle?: string;
  icon?: React.ReactNode;
  locale?: string;
}
export default function BackButton({
  backTo,
  btnText,
  customStyle,
  icon,
  locale,
}: BackButtonProps) {
  return (
    <Link
      locale={locale}
      href={backTo}
      className={`flex flex-col items-center gap-2 transition-all duration-300 ease-in-out underline my-3 cursor-pointer ${customStyle}`}
    >
      {icon}
      {/* Arabic text: "Back to all articles" */}
      {btnText}
    </Link>
  );
}
