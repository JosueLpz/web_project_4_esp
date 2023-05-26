const mainCardsList = document.querySelector(".element");
const page = document.querySelector(".page");

const buttonClosedElement = document.querySelector(".card__element-button-closed");
const formClosedButon = document.querySelector(".form__container-closed");
const buttonClosedZoom = document.querySelector(".zoom__button-closed");
const formAddButton = document.querySelector(".form__container-button");
const formElementButtom = document.querySelector(".card__element-button-add");

const profileButtonEdit = document.querySelector(".profile__row-edit");
const profileButtonCardAdd = document.querySelector(".profile__button");

const formElement = document.querySelector(".card");
const formUp = document.querySelector(".form");

const forms = [formElement, formUp];
const buttonsClosed = [buttonClosedElement, formClosedButon, buttonClosedZoom, formAddButton, formElementButtom];

const profileDfault = () => {
  const profileName = document.querySelector(".profile__row-name");
  const profileHobbie = document.querySelector(".profile__hobbie");
  const imputName = document.querySelector(".form__container-name");
  const imputHobbie = document.querySelector(".form__container-hobby");

  imputName.value = "Marco Aurelio";
  imputHobbie.value = "Filosofo Emperador Romano";
  profileName.textContent = imputName.value;
  profileHobbie.textContent = imputHobbie.value;
};

const closedPopGlobalActive = () => {
  profileButtonEdit.addEventListener("click", () => {
    setTimeout(() => {
      closedPopGlobal(formUp, buttonsClosed);
    }, 500);
  });
  profileButtonCardAdd.addEventListener("click", () => {
    setTimeout(() => {
      closedPopGlobal(formElement, buttonsClosed);
    }, 500);
  });

  function closedPopGlobal(form, buttons) {
    let isPreest = false;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        isPreest = true;
      });
    });

    const closedPop = (evt) => {
      if (evt.target !== form && !form.contains(evt.target)) {
        form.style.display = "";
        page.classList.remove("page__opacity_active");
        document.removeEventListener("click", closedPop);
        document.removeEventListener("keydown", escapePop);
      }
      if (isPreest === true) {
        document.removeEventListener("click", closedPop);
        document.removeEventListener("keydown", escapePop);
      }
    };

    const escapePop = (evt) => {
      if (evt.key === "Escape") {
        form.style.display = "";
        page.classList.remove("page__opacity_active");
        document.removeEventListener("click", closedPop);
        document.removeEventListener("keydown", escapePop);
      }
    };
    document.addEventListener("keydown", escapePop);
    document.addEventListener("click", closedPop);
  }
};

export { mainCardsList, closedPopGlobalActive, buttonsClosed, profileDfault, forms };
