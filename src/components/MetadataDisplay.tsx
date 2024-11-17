import {
  Calendar,
  MapPin,
  Image,
  Edit,
  Camera,
  Aperture,
  Clock,
} from "lucide-react";

interface MetadataDisplayProps {
  metadata: any;
  imageUrl: string;
}

export function MetadataDisplay({ metadata, imageUrl }: MetadataDisplayProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(date);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div>
          <img
            src={imageUrl}
            alt="Analyzed image"
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6">
          {metadata.CreateDate && (
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Capture Date</p>
                <p className="text-gray-600">
                  {formatDate(metadata.CreateDate)}
                </p>
              </div>
            </div>
          )}

          {metadata.latitude && metadata.longitude && (
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Location</p>
                <p className="text-gray-600">
                  {metadata.latitude.toFixed(6)}°,{" "}
                  {metadata.longitude.toFixed(6)}°
                </p>
              </div>
            </div>
          )}

          {metadata.Make && (
            <div className="flex items-start gap-3">
              <Camera className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Camera</p>
                <p className="text-gray-600">
                  {metadata.Make} {metadata.Model}
                </p>
              </div>
            </div>
          )}

          {metadata.FNumber && (
            <div className="flex items-start gap-3">
              <Aperture className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Camera Settings</p>
                <p className="text-gray-600">
                  f/{metadata.FNumber}, {metadata.ExposureTime}s, ISO{" "}
                  {metadata.ISO}
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3">
            <Image className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Dimensions</p>
              <p className="text-gray-600">
                {metadata.ImageWidth || "?"}x{metadata.ImageHeight || "?"}{" "}
                pixels
              </p>
            </div>
          </div>

          {metadata.Software && (
            <div className="flex items-start gap-3">
              <Edit className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Software Used</p>
                <p className="text-gray-600">{metadata.Software}</p>
              </div>
            </div>
          )}

          {metadata.ModifyDate && (
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-700">Last Modified</p>
                <p className="text-gray-600">
                  {formatDate(metadata.ModifyDate)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
