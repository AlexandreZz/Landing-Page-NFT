import animacaoLight from "./animacaoLightSpeed.js";

const PreLoading = () => {
  const [preLoadingDiv, checkDisplayPreLoader] = [
    document.getElementById("preloader"),
    document.getElementsByClassName("checkPreloader")
  ];

  window.onload = (timer, opacityLentgh = 1) => {
    if (preLoadingDiv.style.display == "block") {
      for (const checkDisplayPreLoaders of checkDisplayPreLoader)
        checkDisplayPreLoaders.style = "display:none";
      timer = setInterval(() => {
        opacityLentgh -= 0.1;
        preLoadingDiv.style.opacity = opacityLentgh;

        if (opacityLentgh < 0) {
          preLoadingDiv.style.display = "none";
          opacityLentgh = 1;
          for (const checkDisplayPreLoaders of checkDisplayPreLoader)
            checkDisplayPreLoaders.style.display = "block";
          clearInterval(timer);
          animacaoLight();
        }
      }, 1);

      // 200
    }
  };
};

export default PreLoading;
