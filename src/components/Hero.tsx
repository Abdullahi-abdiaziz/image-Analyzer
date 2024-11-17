import { FileImage, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 dark:bg-gradient-to-br dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {t("app.tagline")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-200 mb-12 max-w-2xl mx-auto">
          {t("app.description")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="bg-blue-100 dark:bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileImage className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-300 mb-2">
              {t("features.upload.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-500">
              {t("features.upload.description")}
            </p>
          </div>

          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="bg-blue-100 dark:bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {t("features.analysis.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-500">
              {t("features.analysis.description")}
            </p>
          </div>

          <div className="bg-white/60 dark:bg-black/60 backdrop-blur-sm p-6 rounded-xl">
            <div className="bg-blue-100 dark:bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {t("features.privacy.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-500">
              {t("features.privacy.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
