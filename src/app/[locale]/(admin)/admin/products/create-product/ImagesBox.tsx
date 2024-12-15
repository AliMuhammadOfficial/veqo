import { Upload, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ImageBoxProps {
  form: any; // Ensure proper typing for the form
}

const ImagesBox = (props: ImageBoxProps) => {
  const { form } = props;
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const existingImages = form.getValues("images") || [];
      const newImages = Array.from(files);

      // Append the new images to the existing ones
      const updatedImages = [...existingImages, ...newImages];

      // Update form state with the combined images
      form.setValue("images", updatedImages);

      // Create preview URLs for selected images
      const newPreviewUrls = [
        ...previewUrls,
        ...newImages.map((file) => URL.createObjectURL(file)),
      ];
      setPreviewUrls(newPreviewUrls);
    }
  };

  const handleRemoveImage = (index: number) => {
    // Get current form images and remove the image at the given index
    const currentImages = form.getValues("images") || [];
    const updatedImages = currentImages.filter((_: any, i: number) => i !== index);

    // Update form state
    form.setValue("images", updatedImages);

    // Remove the corresponding preview URL
    const updatedPreviewUrls = previewUrls.filter((_, i) => i !== index);
    setPreviewUrls(updatedPreviewUrls);
  };

  useEffect(() => {
    const formImages = form.getValues("images");
    if (formImages) {
      const newPreviewUrls = Array.from(formImages).map((file) =>
        URL.createObjectURL(file as any)
      );
      setPreviewUrls(newPreviewUrls);
    }
  }, [form.getValues("images")]);

  return (
    <div className="w-full h-auto py-5 bg-white rounded-xl shadow-sm">
      <div className="top border-b border-gray-300 px-5 pb-4">
        <p className="text-black">Add Product Photos</p>
      </div>
      <div className="py-6 px-5">
        {previewUrls?.length > 0 ? (
          <div className="w-full h-auto min-h-[220px] border border-gray-300 p-6 flex flex-wrap gap-4 rounded-xl">
            {previewUrls.map((url, index) => (
              <div
                key={index}
                className="w-[120px] max-h-[120px] aspect-square overflow-hidden rounded-md relative"
              >
                <div className="absolute top-0 right-0 p-1">
                  <X
                    className="w-5 h-5 text-red-600 bg-white rounded-full p-[3px] cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                  />
                </div>
                <img
                  src={url}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <label>
              <div className="w-[120px] max-h-[120px] aspect-square overflow-hidden flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                <Upload className="w-10 h-10 text-[#FFBB00]" />
              </div>
              <input
                type="file"
                onChange={handleImagesChange}
                className="h-1"
                multiple
                hidden
              />
            </label>
          </div>
        ) : (
          <label>
            <div className="w-full h-auto min-h-[220px] border border-dashed border-gray-300 p-6 flex flex-wrap gap-4 rounded-xl">
              <div className="w-full flex flex-col items-center justify-center">
                <Upload className="w-12 h-12 text-[#FFBB00]" />
                <h3 className="text-2xl mt-2">Upload brand images</h3>
              </div>

              <input
                type="file"
                onChange={handleImagesChange}
                className="h-1"
                multiple
                hidden
              />
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default ImagesBox;
