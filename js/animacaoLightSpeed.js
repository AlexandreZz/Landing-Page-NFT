const animacaoLight = () => {
  const [removeHiddenBody, LightSpeedIn, Animated, checkSessaoDisplay] = [
    document.querySelector("body"),
    document.getElementsByClassName("lightSpeedIn"),
    document.getElementsByClassName("animated"),
    document.getElementsByClassName("checkPreloader")
  ];

  const removeClassAndId = () => {
    removeHiddenBody.removeAttribute("id");
    for (let index = 0; index < LightSpeedIn.length; index++) {
      LightSpeedIn[index].classList.remove("lightSpeedIn");
      Animated[index].classList.remove("animated");
    }
  };

  for (const checkSessaoDisplays of checkSessaoDisplay) {
    if (checkSessaoDisplays.style.display === "block")
      setTimeout(removeClassAndId, 1500);
  }
};

export default animacaoLight;
