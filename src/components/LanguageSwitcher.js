"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Remove the locale part from the current pathname
  const pathWithoutLocale = pathname.replace(/^\/(en|id)/, "") || "/";

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "id" : "en";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <>
      <button
        onClick={toggleLanguage}
        className="text-2xl p-4 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 transition absolute top-2 right-2"
        aria-label="Switch Language"
      >
        {locale === "en" ? "🇺🇸" : "🇮🇩"}
      </button>
    </>
  );
};

export default LanguageSwitcher;
