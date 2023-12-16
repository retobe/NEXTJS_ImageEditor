"use client";
import React, { useState } from "react";

const EditingControls = () => {
  const [blurPx, setBlurPx] = useState(0); // Set an initial value
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [grayscale, setGrayscale] = useState(0);

  const editImage = () => {
    const previewImage = document.querySelector(
      "#previewImage"
    ) as HTMLImageElement | null;
    if (previewImage) {
      if (
        previewImage.src !=
        "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
      ) {
        previewImage.className =
          "w-[50vh] h-[50vh] mx-auto mt-4 shadow-2xl object-cover";

        // Filter the Image
        previewImage.style.filter = `blur(${blurPx}px) brightness(${
          brightness < 0 ? brightness * 100 + 100 : brightness * 100 + 100
        }%) contrast(${
          contrast < 0 ? contrast * 100 + 100 : contrast * 100 + 100
        }%) grayscale(${grayscale * 100}%)`;

        /* Tailwind Classes (NOT WORKING)
        previewImage.classList.add(
          `blur-[${blurPx}px]`,
          `brightness-${
            brightness < 0 ? brightness * 100 + 100 : brightness * 100 + 100
          }`,
          `contrast-${
            contrast < 0 ? contrast * 100 + 100 : contrast * 100 + 100
          }`,
          `grayscale-${
            grayscale < 0 ? grayscale * 100 + 100 : grayscale * 100 + 100
          }`
        );
        */
        console.log("Edited the image.");
      } else {
        alert("Please Provide an Image To Edit");
      }
    } else {
      alert("Image Element has been removed/not loaded.");
    }
  };

  const resetImage = () => {
    const previewImage = document.querySelector(
      "#previewImage"
    ) as HTMLImageElement | null;

    if (previewImage) {
      if (
        previewImage.src !=
        "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
      ) {
        previewImage.className =
          "w-[50vh] h-[50vh] mx-auto mt-4 shadow-2xl object-cover";

        // Filter the Image
        previewImage.style.filter = ``;
      } else {
        alert("There's no image already to reset");
      }
    } else {
      alert("Image Element has been removed/not loaded.");
    }
  };

  const handleBlurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlurPx(Number(e.target.value));
    if (blurPx > 30) {
      e.target.classList.add("range-error");
      e.target.classList.remove("range-warning");
    } else if (blurPx > 10) {
      e.target.classList.add("range-warning");
      e.target.classList.remove("range-error");
    } else {
      e.target.classList.remove("range-warning");
      e.target.classList.remove("range-error");
    }
  };

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(Number(e.target.value));
    if (brightness > 0.5) {
      e.target.classList.add("range-error");
      e.target.classList.remove("range-warning");
    } else if (brightness < 0.5 && brightness > 0) {
      e.target.classList.add("range-warning");
      e.target.classList.remove("range-error");
    } else if (brightness >= -0.9) {
      e.target.classList.add("range-error");
      e.target.classList.remove("range-warning");
    } else if (brightness >= -0.5 && brightness > 1) {
      e.target.classList.add("range-warning");
      e.target.classList.remove("range-error");
    } else {
      e.target.classList.remove("range-warning");
      e.target.classList.remove("range-error");
    }
  };

  const handleContrastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContrast(Number(e.target.value));
    if (contrast === 0.9) {
      e.target.classList.add("range-error");
      e.target.classList.remove("range-warning");
    } else if (contrast > 0.5) {
      e.target.classList.add("range-warning");
      e.target.classList.remove("range-error");
    } else if (contrast >= -0.5) {
      e.target.classList.add("range-warning");
      e.target.classList.remove("range-error");
    } else if (contrast >= -0.9) {
      e.target.classList.add("range-error");
      e.target.classList.remove("range-warning");
    } else {
      e.target.classList.remove("range-warning");
      e.target.classList.remove("range-error");
    }
  };

  const handleGrayscaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrayscale(Number(e.target.value));
    if (grayscale === 0.9) {
      e.target.classList.add("range-error");
      e.target.classList.remove("range-warning");
    } else if (grayscale > 0.5) {
      e.target.classList.add("range-warning");
      e.target.classList.remove("range-error");
    } else {
      e.target.classList.remove("range-error");
      e.target.classList.remove("range-warning");
    }
  };

  return (
    <div className="controls flex flex-col gap-3 tracking-widest p-4 bg-gray-300 text-black rounded-xl lg:absolute w-full max-w-[30rem]">
      <h1 className="text-[50px]">Image Editor</h1>
      <div className="blur-input">
        <label htmlFor="blurInput" className="text-[20px]">
          Blur: {blurPx}px
        </label>
        <br />
        <input
          type="range"
          min={0}
          max={64}
          value={blurPx}
          onChange={handleBlurChange}
          name="blurRange"
          className="range w-full"
        />
      </div>
      <div className="brightness-input">
        <label htmlFor="brightnessInput" className="text-[20px]">
          Brightness: {Math.round(brightness * 100)}%
        </label>
        <br />
        <input
          type="range"
          min={-1}
          step={0.1}
          max={1}
          value={brightness}
          onChange={handleBrightnessChange}
          name="brightnessInput"
          className="range w-full"
        />
      </div>
      <div className="contrast-input">
        <label htmlFor="contrast" className="text-[20px]">
          Contrast: {Math.round(contrast * 100)}%
        </label>
        <br />
        <input
          type="range"
          min={-1}
          step={0.1}
          max={1}
          value={contrast}
          onChange={handleContrastChange}
          name="contrast"
          className="range w-full"
        />
      </div>
      <div className="grayscale-input">
        <label htmlFor="grayscale" className="text-[20px]">
          Grayscale: {Math.round(grayscale * 100)}%
        </label>
        <br />
        <input
          type="range"
          min={0}
          step={0.1}
          max={1}
          value={grayscale}
          onChange={handleGrayscaleChange}
          name="grayscale"
          className="range w-full"
        />
      </div>
      <input
        type="submit"
        value="Edit The Image"
        className="btn btn-primary text-[25px] text-white"
        onClick={editImage}
      />
      <input
        type="submit"
        value="Reset To Original"
        className="btn btn-error text-[25px] text-white"
        onClick={resetImage}
      />
    </div>
  );
};

export default EditingControls;
