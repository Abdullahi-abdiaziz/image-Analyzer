import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "so", name: "Soomaali" },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline">
          {languages.find((lang) => lang.code === i18n.language)?.name}
        </span>
      </button>

      <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              i18n.language === lang.code
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
