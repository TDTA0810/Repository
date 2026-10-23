
function upDate(previewPic) {
  const imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
  imageDiv.style.backgroundSize = "contain";
  imageDiv.style.backgroundPosition = "center";
  imageDiv.style.backgroundRepeat = "no-repeat";

  imageDiv.textContent = previewPic.alt;

  console.log("Image URL:", previewPic.src);
}

function unDo() {
  const imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";

  console.log("Image focus or hover ended");
}

function addTabindex() {
  console.log("addTabindex function started");

  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex to image:", i + 1);
  }
}

window.onload = addTabindex;
