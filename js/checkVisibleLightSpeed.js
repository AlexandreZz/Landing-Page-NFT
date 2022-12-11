const [checkVisible] = [document.getElementsByClassName("checkVisible")];

jQuery(window).scroll(function() {
  for (const checkVisibles of checkVisible) {
    const posicoes = checkVisibles.getBoundingClientRect();
    const inicio = posicoes.top;

    if (inicio <= window.innerHeight) {
      checkVisibles.classList.add("lightSpeedIn");
      checkVisibles.classList.add("animated");
    }
  }
});
