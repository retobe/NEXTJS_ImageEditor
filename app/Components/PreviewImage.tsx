"use client";
import React, { useState } from "react";

const PreviewImage = () => {
  const [previewImage, setPreviewImage] = useState<string>(
    "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
  );

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];
    const fileInput = document.querySelector(
      "#fileUploader"
    ) as HTMLInputElement | null;
    const previewImage = document.querySelector(
      "#previewImage"
    ) as HTMLImageElement | null;
    const saveBtn = document.querySelector(
      "#saveBtn"
    ) as HTMLInputElement | null;

    if (!fileInput) {
      alert("Stop playing with the HTML elements.");
      window.location.reload();
      return;
    }

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (saveBtn) {
          saveBtn.classList.remove("btn-disabled");
        }
        const result = e.target?.result as string;
        setPreviewImage(result);
      };

      reader.readAsDataURL(file);
    } else {
      // Handle non-image file selection, e.g., show an error message
      if (saveBtn && previewImage) {
        saveBtn.classList.add("btn-disabled");
        previewImage.src =
          "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png";
      }
      fileInput.value = "";
      alert("Please select a valid image file.");
      console.error("Please select a valid image file.");
    }
  };

  return (
    <>
      <form className="form flex flex-col w-[90%] max-w-[30rem] p-4 gap-3 shadow-2xl border-3 mx-auto mt-3 text-white rounded-xl items-center">
        <h1 className="text-center text-xl">Select Your Image</h1>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="fileUploader"
          className="file-input file-input-bordered w-full max-w-xs"
          onChange={handleImageChange}
        />
      </form>

      <img
        src={previewImage}
        id="previewImage"
        alt="Preview Image"
        className="w-[50vh] h-[50vh] mx-auto mt-4 shadow-2xl object-cover"
      />
    </>
  );
};

export default PreviewImage;
