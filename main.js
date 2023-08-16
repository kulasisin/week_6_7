import "./assets/scss/all.scss";
import bootstrap from "bootstrap/dist/js/bootstrap";
// import { Modal } from "bootstrap";

let path = location.pathname;
let pathArr = path.split("/");
let pathName = pathArr[pathArr.length - 1];
let htmlName = pathName.slice(0, pathName.indexOf(".html"));

window.addEventListener("DOMContentLoaded", (event) => {
  if (htmlName === "index") {
    const memberModal = new bootstrap.Modal("#member-modal");
    memberModal.show();
  }
});

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  slidesPerGroupAuto: true,
  loop: true,
  speed: 8000,
  autoplay: {
    delay: 0,
  },
  allowTouchMove: false,
});
