import Image from "next/image";
import EditingControls from "./Components/EditingControls";
import { useState } from "react";
import PreviewImage from "./Components/PreviewImage";
import SaveBtn from "./Components/SaveBtn";
export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl tracking-wider">Image Editor</h1>

      <div className="editor">
        <EditingControls />
        <PreviewImage></PreviewImage>
      </div>

      <SaveBtn />
    </>
  );
}
