import React, { useCallback } from "react";
import { Upload } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ImageDropzoneProps {
  onImageSelect: (file: File) => void;
  selectedImage: string | null;
}

export function ImageDropzone({
  onImageSelect,
  selectedImage,
}: ImageDropzoneProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const { t } = useTranslation();
  return (
    <label
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="block w-full max-w-2xl mx-auto p-8 border-2 border-dashed border-blue-300 rounded-lg bg-white/60 dark:bg-black/90 backdrop-blur-sm hover:bg-white/80 transition-colors cursor-pointer"
    >
      {selectedImage ? (
        <div className="text-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-64 h-64 object-cover mx-auto mb-4 rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {t("dropzone.title")}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <Upload className="w-12 h-12 text-blue-500" />
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              {t("dropzone.subtitle")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t("dropzone.change")}
            </p>
          </div>
        </div>
      )}
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
    </label>
  );
}
