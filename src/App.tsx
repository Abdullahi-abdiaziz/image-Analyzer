import { useState } from "react";
import { useTranslation } from "react-i18next";
import exifr from "exifr";
import { ImageDropzone } from "./components/ImageDropzone";
import { MetadataDisplay } from "./components/MetadataDisplay";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Search } from "lucide-react";

function App() {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
    setMetadata(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    try {
      setIsAnalyzing(true);
      const data = await exifr.parse(selectedFile);
      setMetadata(data || { error: t("analysis.noData") });
    } catch (error) {
      console.error("Error reading image metadata:", error);
      setMetadata({ error: t("analysis.error") });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <Hero />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="space-y-8">
          <ImageDropzone
            onImageSelect={handleImageSelect}
            selectedImage={imageUrl}
          />

          {imageUrl && !metadata && (
            <div className="text-center">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <Search className="w-5 h-5" />
                {isAnalyzing ? t("analysis.analyzing") : t("analysis.button")}
              </button>
            </div>
          )}

          {metadata &&
            (metadata.error ? (
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg">
                {metadata.error}
              </div>
            ) : (
              <MetadataDisplay metadata={metadata} imageUrl={imageUrl!} />
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
