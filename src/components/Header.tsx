import { Camera } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              {t("app.name")}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t("nav.howItWorks")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t("nav.about")}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-6">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
