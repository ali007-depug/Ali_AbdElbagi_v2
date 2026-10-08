import { useTranslations } from "next-intl";

interface ConatctAccountsProps {
  accountName: string;
  icon: React.ReactNode;
  name: string;
  href: string;
}

export default function ConatctAccounts({
  accountName,
  icon,
  name,
  href,
}: ConatctAccountsProps) {
  const t = useTranslations();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white/10"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
        {icon}
      </div>
      <div className="min-w-0 text-start">
        <p className="text-xs text-white/60">
          {t("contact.via")} {name}
        </p>
        <p className="truncate font-bold text-white group-hover:text-sky-400 transition-colors">
          {accountName}
        </p>
      </div>
    </a>
  );
}