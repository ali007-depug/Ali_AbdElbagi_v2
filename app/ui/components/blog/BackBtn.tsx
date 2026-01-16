import { Link } from "@/i18n/navigation";
interface BackButtonProps {
    backTo: string;
    btnText?: string;
    customStyle?:string;
    icon?:React.ReactNode;
}
export default function BackButton({backTo,btnText,customStyle,icon}: BackButtonProps) {
  return (
    <Link
    href={backTo}
      className={`flex flex-col items-center gap-2 transition-all duration-300 ease-in-out underline my-3 cursor-pointer ${customStyle}`}
    >
        {icon}
      {/* Arabic text: "Back to all articles" */}
      {btnText}
    </Link>
  );
}
