"use client";
import React from "react";

const SaveBtn = () => {
  const saveImage = () => {
    const previewImage = document.querySelector(
      "#previewImage"
    ) as HTMLImageElement | null;
    const fileInput = document.querySelector(
      "#fileUploader"
    ) as HTMLInputElement | null;

    if (
      previewImage &&
      fileInput &&
      fileInput.files &&
      fileInput.files.length > 0
    ) {
      const computedStyle = window.getComputedStyle(previewImage);
      const imageFilter = computedStyle.getPropertyValue("filter");
      const canvas = document.createElement("canvas");
      canvas.width = 595;
      canvas.height = 595;

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.filter = imageFilter;
        ctx.drawImage(previewImage, 0, 0, 595, 595);

        ctx.filter = "none";

        const dataURL = canvas.toDataURL("image/png");
        const fileName = fileInput.files[0].name;
        const fileNameWithoutExtension = fileName.slice(
          0,
          fileName.lastIndexOf(".")
        );

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `${fileNameWithoutExtension}_EDITED.png`;

        link.click();
      }
    }
  };

  return (
    <div className="mx-auto text-center block mt-4 p-4">
      <input
        onClick={saveImage}
        id="saveBtn"
        type="submit"
        value="Save The Image"
        className="btn btn-success mx-auto text-3xl shadow-xl text-white btn-disabled"
      />
    </div>
  );
};

export default SaveBtn;
