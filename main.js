"use strict";

const x = document.querySelector(".x");

function openModal() {
  const button = document.querySelector(".button");
  const modal = document.querySelector(".modal");

  button.addEventListener("click", function () {
    modal.classList.add("open");
  });

  x.addEventListener("click", function () {
    modal.classList.remove("open");
  });
}

openModal();

function subscribed() {
  const subscribeBtn = document.querySelector(".subscribe");
  const content = document.querySelector(".modal-flex");
  const message = document.querySelector(".subscription-window");

  subscribeBtn.addEventListener("click", function () {
    content.remove();
    subscribeBtn.remove();
    message.classList.add("open");
    x.style.top = "-5%";
    x.style.left = "97%";
  });
}

// subscribed();

function submitForm() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const names = this.names.value;
    const phone = this.phone.value;
    const email = this.email.value;
    const errorMessage = this.querySelector(".error-message");
    const successMessage = document.querySelector(".subscription-window");
    const inputs = this.querySelectorAll("input");
    const stringRegex = /^[a-zA-Z ]{2,30}$/;
    const numberRegex = /^[0-9]{12}$/;
    const emailRegex = /./;
    hideMessage();

    function showMessage(msg) {
      errorMessage.textContent = msg;
      errorMessage.classList.add("open");
    }

    function hideMessage() {
      errorMessage.textContent = "";
      errorMessage.classList.remove("open");
    }

    if (!names.trim()) {
      showMessage("'Your names' field is empty!");
    } else {
      if (!stringRegex.test(names)) {
        showMessage("'Your names' field must contain only letters!");
      } else {
        if (!phone.trim()) {
          showMessage("'Phone No' field is empty!");
        } else {
          if (!numberRegex.test(phone)) {
            showMessage("'Phone No' field should contain 12 digits!");
          } else {
            if (!email.trim()) {
              showMessage("'Email address' field is empty!");
            } else {
              if (!emailRegex.test(email)) {
                showMessage("Invalid email address!");
              } else {
                successMessage.classList.add("open");
                inputs.forEach((input) => (input.value = ""));
                setTimeout(() => successMessage.classList.remove("open"), 3000);
              }
            }
          }
        }
      }
    }
  });
}

submitForm();
