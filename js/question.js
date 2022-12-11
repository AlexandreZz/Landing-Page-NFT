const questionActive = () => {
  const [questionTitle] = [document.getElementsByClassName("questionTitle")];

  for (const questionTitles of questionTitle) {
    questionTitles.onclick = function() {
      const questionTitleIMG = questionTitles.children[1];
      const questionDescription = questionTitles.parentElement.children[1];

      if (questionTitles.getAttribute("target") === "disabled") {
        questionTitleIMG.src = "./img/Menos.png";
        questionDescription.classList.add("questionActive");
        questionTitles.setAttribute("target", "active");
        questionDescription.classList.remove("questionDisabled");
      } else {
        questionTitleIMG.src = "./img/Plus.png";
        questionDescription.classList.add("questionDisabled");
        questionTitles.setAttribute("target", "disabled");
        questionDescription.classList.remove("questionActive");
      }
    };
  }
};

export default questionActive;
