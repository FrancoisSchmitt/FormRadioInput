// DOM
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");

const formData = document.querySelectorAll(".formData");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");


// DOM event form
const eventForm = document.querySelector("form");

// DOM form validate
const confirmModal = document.querySelector(".confirm-modal")
const confirmClose = document.querySelector(".confirm-close");
const confirmCloseBtn = document.querySelector(".confirm-modal-btn");


// Fermer le modal de confirmation.
confirmClose.onclick = function () {
  confirmModal.style.display = "none";
}

confirmCloseBtn.onclick = function () {
  confirmModal.style.display = "none";
}

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});


//  Formule 1 //


// function validate() {


//   //  radiobutton verif
//   for (let radio of locationInput) {
//     if (radio.checked === true) {
//       formData[0].setAttribute("data-success-visible", false);
//       formData[0].setAttribute("data-error-visible", false);
//     }
//     else {
//       formData[0].setAttribute("data-error", `Veuillez séléctioner une ville.`);
//       formData[0].setAttribute("data-error-visible", true);
//     }
//   }
//   if (radio.checked === true) {
//     modalbg.style.display = "none";
//     confirmModal.style.display = "block";
//   }
//   else {
//     return false;
//   }
// };


//  Formule 2  //


function validate() {
  // checkboxinput verif
  if (location1.checked || location2.checked || location3.checked ||
    location4.checked || location5.checked || location6.checked) {
    formData[0].setAttribute("data-success-visible", false);
    formData[0].setAttribute("data-error-visible", false);

  }
  else {
    formData[0].setAttribute("data-error", `Veuillez séléctioner une ville.`);
    formData[0].setAttribute("data-error-visible", true);
  }

  if (((location1.checked) || (location2.checked) || (location3.checked) || (location4.checked) ||
    (location5.checked) || (location6.checked))) {
    modalbg.style.display = "none";
    confirmModal.style.display = "block";
  }
  else {
    return false;
  }
};


