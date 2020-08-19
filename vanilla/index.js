const dropArea = document.getElementById("drop-area");

const preventDefaults = e => {
  e.preventDefault();
  e.stopPropagation();
}

const highlight = e => dropArea.classList.add("highlight");

const unhighlight = e => dropArea.classList.remove("highlight");

["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

const previewFile = file => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    let img = document.createElement("img");
    img.src = reader.result;
    document.getElementById("gallery").appendChild(img);
  };
};

const handleFiles = files => {
  const filesArray = [...files];
  filesArray.forEach(previewFile);
};

const handleDrop = e => {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
};

dropArea.addEventListener("drop", handleDrop, false);