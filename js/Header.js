function ativaClass(event) {
  event.classList.remove("desativaBorder");
  event.classList.add("activeBorder");
}

function removeClass(event) {
  event.classList.remove("activeBorder");
  event.classList.add("desativaBorder");
}

function headerFixed() {
  const [doc, headerFixed] = [
    document.documentElement,
    document.querySelector("header")
  ];

  window.addEventListener("scroll", function() {
    valueScroll = parseInt(
      100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight)
    ); // calcula tamanho da nossa scroll em 100%

    if (valueScroll > 9) {
      headerFixed.setAttribute("id", "headerFixed");
    } else {
      headerFixed.removeAttribute("id");
    }
  });
}

headerFixed();
