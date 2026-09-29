const form = document.querySelector("#formSign");
const data = document.querySelectorAll(".personal_data");
let input = Array.from(data).map(e => e.querySelector("input"));

form.addEventListener("submit", e => {
  e.preventDefault();
  openModal()
  setTimeout(closeModal, 3000);
  let formDATA = new FormData(form);
  for (let [key, value] of formDATA.entries()) {
    console.log(`${key}: ${value}`);
    localStorage.clear();
  }
  
  input.forEach(e =>{
    e.value = "";
  })
})

const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

closeButton.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});




window.onload = () => {
  let storedData = JSON.parse(localStorage.getItem("formData")) || {};
  input.forEach(e => {
    const name = e.getAttribute("name");
    if (name && storedData[name]) {
      e.value = storedData[name];
    }
  });
};
input.forEach(e => {
  e.addEventListener("input", event => {
    const name = event.target.getAttribute("name");
    if (name) {
      let storedData = JSON.parse(localStorage.getItem("formData")) || {};
      storedData[name] = event.target.value;
      localStorage.setItem("formData", JSON.stringify(storedData));
    }
  });
});
