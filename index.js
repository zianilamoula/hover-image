function upDate(previewPic) {
    const mainImage = document.getElementById('image');
    mainImage.style.backgroundImage = `url(${previewPic.src})`;
    mainImage.textContent = previewPic.alt;
    mainImage.classList.remove('empty');
  }

  function unDo() {
    const mainImage = document.getElementById('image');
    mainImage.style.backgroundImage = 'url("")';
    mainImage.textContent = 'Hover over an image below to display here.';
    mainImage.classList.add('empty');
  }

  function initGallery() {
    alert("press Tab to scicle through the images")
    const display = document.getElementById("image");

    display.style.backgroundImage = 'url("img/start.jpg")'; 
    display.innerHTML = "Welcome! Hover over an image below to display here.";

    tabFocus();
}

function tabFocus() {
  const images = document.getElementsByClassName("preview");

  for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("tabindex", "0"); 
      console.log(`Tabindex added to image ${i + 1}: ${images[i].alt}`);
  }
}