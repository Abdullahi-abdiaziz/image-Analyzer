import { Github, Twitter, Camera } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-2 mt-10 rounded-md mx-5  border-gray-100 dark:border-gray-700 dark:bg-slate-950 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-bold dark:text-gray-100 text-gray-800">
                {t("ImageInsight")}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {t("footer.links.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {t("footer.links.howItWorks")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors"
                >
                  {t("footer.links.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition-colors"
                >
                  {t("footer.links.terms")}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {t("footer.connect.title")}
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {currentYear} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
