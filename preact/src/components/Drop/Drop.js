import { h } from "preact";
import { useEffect } from "preact/hooks";
import { createRef } from "preact";

import "./index.css";

export default function () {
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highlight = (e) => dropArea.classList.add("highlight");

  const unhighlight = (e) => dropArea.classList.remove("highlight");

  const previewFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      let img = document.createElement("img");
      img.src = reader.result;
      document.getElementById("gallery").appendChild(img);
    };
  };

  const handleFiles = (files) => {
    const filesArray = [...files];
    filesArray.forEach(previewFile);
  };

  const handleDrop = (e) => {
    const dt = e.dataTransfer;
    let files = !dt ? e.target.files : dt.files;
    // if (!dt) files = e.target.files;
    // else files = dt.files;
    handleFiles(files);
  };

  // --- MAIN ---------------------------------------------
  let dropArea = createRef();
  useEffect(() => {
    console.log(dropArea);

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });
    ["dragenter", "dragover"].forEach((eventName) => {
      dropArea.addEventListener(eventName, highlight, false);
    });
    ["dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });

    dropArea.addEventListener("drop", handleDrop, false);
  }, []);

  return (
    <div>
      <div ref={(elem) => (dropArea = elem)} id="drop-area">
        <form className="my-form" encType="multipart/form-data">
          <p>
            You can drag an drop multiple files onto this area to upload them.
          </p>
          <input
            type="file"
            id="fileElem"
            multiple
            accept="image/*"
            onChange={handleDrop}
          />
          <label htmlFor="fileElem" className="button">
            Select some files
          </label>
          <div id="gallery"></div>
        </form>
      </div>
      <p id="formError"></p>
    </div>
  );
}
