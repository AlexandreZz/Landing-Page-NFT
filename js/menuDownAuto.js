const menuDownAuto = () => {
  const [hrefPosition] = [document.querySelectorAll(".checkPosition")];

  for (const hrefPositions of hrefPosition) {
    hrefPositions.addEventListener("click", function(e) {
      e.preventDefault();

      var id = jQuery(this).attr("href"),
        targetOffset = jQuery(id).offset().top;

      jQuery("html,body").animate({ scrollTop: targetOffset - 120 }, 500);
    });
  }
};

export default menuDownAuto;
