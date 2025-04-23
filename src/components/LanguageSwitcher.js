"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "EN" },
    { code: "id", label: "ID" },
  ];

  // Remove the locale part from the current pathname
  const pathWithoutLocale = pathname.replace(/^\/(en|id)/, "") || "/";

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={pathWithoutLocale}
          locale={lang.code}
          className={`px-3 py-1 rounded ${
            locale === lang.code ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
