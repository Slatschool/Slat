document.addEventListener("DOMContentLoaded", () => {
  let prevButton = document.getElementById("prev");
  let nextButton = document.getElementById("next");

  let container = document.querySelector(".container");
  // if (!container) {
  //   console.error("Elemento .container não encontrado");
  //   return;
  // }

  let items = container.querySelectorAll(".list .item");
  // if (items.length === 0) {
  //   console.error("Nenhum elemento .list .item encontrado");
  //   return;
  // }

  let indicator = document.querySelector(".indicators");
  // if (!indicator) {
  //   console.error("Elemento .indicators não encontrado");
  //   return;
  // }

  let dots = indicator.querySelectorAll("ul li");
  // if (dots.length === 0) {
  //   console.error("Nenhum elemento ul li dentro de .indicators encontrado");
  //   return;
  // }

  let active = 0;
  let firstPosition = 0;
  let lastPosition = items.length - 1;

  function setSlider() {
    let itemOld = container.querySelector(".list .item.active");
    if (itemOld) {
      itemOld.classList.remove("active");
    }

    let dotsOld = indicator.querySelector("ul li.active");
    if (dotsOld) {
      dotsOld.classList.remove("active");
    }

    dots[active].classList.add("active");
    indicator.querySelector(".number").innerHTML = "0" + (active + 1);
  }

  nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add("active");
  };

  prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add("active");
  };
});
