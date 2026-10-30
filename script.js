
function upDate(previewPic) {
    console.log("Image focused or mouse is over it!");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Image lost focus or mouse left!");

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Page loaded - adding tabindex to images!");

    const images = document.querySelectorAll("figure img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image:", i + 1);
    }
}
