function rangeSkill() {
  var rng = document.getElementById("chs-skill"); //rng - это Input
  var slider = document.querySelector(".slider-gradient"); // div - блок test

  slider.style.width = rng.value + "%";
  slider.style.height = rng.value / 10 + 4 + "px";

  $(".slider-gradient").append(
    `<style>.slider-gradient:before{padding-bottom:${rng.value / 10 +
      "px"};}</style>`
  );
}
