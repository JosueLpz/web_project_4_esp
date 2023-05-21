const mainCardsList = document.querySelector(".element");
const page = document.querySelector(".page");

const openPop = (forms, buttoms) => {
  buttoms.addEventListener("click", function () {
    forms.classList.add("root__windos_fadeon");
    forms.classList.add("form__container_open_active_e");
    page.classList.add("page__opacity_active");
    setTimeout(function () {
      closedPopGlobal(forms, buttoms);
    }, 500);
  });
};

const closedPop = (forms, buttoms) => {
  buttoms.addEventListener("click", function () {
    forms.classList.add("root__windos_fadeoff");
    setTimeout(function () {
      forms.classList.remove("form__container_open_active_e");
      forms.classList.remove("root__windos_fadeoff");
      page.classList.remove("page__opacity_active");
    }, 500);
  });
};

const openClosedPopGlobal = (forms, buttoms) => {
  let isPreest = false;
  buttoms.forEach((button) => {
    button.addEventListener("click", () => {
      isPreest = true;
    });
  });

  const closedPop = (evt) => {
    if (evt.target !== forms && !forms.contains(evt.target)) {
      forms.classList.remove("form__container_open_active_e");
      page.classList.remove("page__opacity_active");
      document.removeEventListener("click", closedPop);
      document.removeEventListener("keydown", escapePop);
    } else if (isPreest === true) {
      document.removeEventListener("click", closedPop);
      document.removeEventListener("keydown", escapePop);
    }
  };

  const escapePop = (evt) => {
    if (evt.key === "Escape") {
      forms.classList.remove("form__container_open_active_e");
      page.classList.remove("page__opacity_active");
      document.removeEventListener("click", closedPop);
      document.removeEventListener("keydown", escapePop);
    }
  };

  document.addEventListener("click", closedPop);
  document.addEventListener("keydown", escapePop);
};

export { mainCardsList, openPop, closedPop, openClosedPopGlobal };
