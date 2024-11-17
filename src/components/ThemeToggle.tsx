import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={t("theme.toggle")}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
