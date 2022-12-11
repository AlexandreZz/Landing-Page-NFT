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

jQuery("#next").click(function() {
  var principalTopo = jQuery(".slider div:last-of-type"); // copia o conteudo da última

  jQuery(".slider div:last-of-type").remove(); // remove a última
  jQuery(principalTopo).insertBefore(".slider div:first-of-type"); // insere antes da primeira
});

jQuery("#prev").click(function() {
  var principalTheEnd = jQuery(".slider div:first-of-type"); // copia o conteudo da primeira

  jQuery(".slider div:first-of-type").remove(); // remove a primeira
  jQuery(principalTheEnd).insertAfter(".slider div:last-of-type"); // insere depois da última
});
