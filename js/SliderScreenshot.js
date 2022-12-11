const [divImgSlider] = [document.getElementsByClassName("imgSlide")];

const active = { div: "", order: "", width: "" };

function sliderActive(event) {
  for (const divImgSliders of divImgSlider) {
    if (divImgSliders.id === "ativo") {
      const idActive = divImgSliders.style.cssText.split(" ");

      active.div = divImgSliders;
      active.order = idActive[1];
      active.width = idActive[idActive.length - 1];
    }
  }

  if (event.id !== "ativo") {
    const thisElement = event.style.cssText.split(" ");
    const ThisOrder = thisElement[1];
    const ThisWidth = thisElement[thisElement.length - 1];

    active.div.removeAttribute("id");
    active.div.setAttribute("style", `order: ${ThisOrder} width:${ThisWidth}`);

    event.setAttribute("id", "ativo");
    event.setAttribute("style", `order: ${active.order} width:${active.width}`);
  }
}

const srcImage = {
  "0": "./img/Slide/Card.png",
  "1": "./img/Slide/Card (1).png",
  "2": "./img/Slide/Card (2).png",
  "3": "./img/Slide/Card (3).png",
  "4": "./img/Slide/Card (4).png",
  count: 0
};

function sliderMobile(event) {
  const max = divImgSlider.length - 1;
  const min = 0;

  if (event.id === "next") {
    srcImage.count++;
    srcImage.count > max ? (srcImage.count = max) : "";
    divImgSlider[0].children[0].src = `${srcImage[srcImage.count]}`;
  } else {
    srcImage.count--;
    srcImage.count < min ? (srcImage.count = min) : "";
    divImgSlider[0].children[0].src = `${srcImage[srcImage.count]}`;
  }
}
