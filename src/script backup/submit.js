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
  input.forEach(e => {
    const name = e.getAttribute("name");
    if (name && localStorage.getItem(name)) {
      e.value = localStorage.getItem(name);
    }
  });
};

input.forEach(e =>{
  
  e.addEventListener("input", event =>{
    console.log();
    switch(event.target.getAttribute("name")){
      case "name":
        localStorage.setItem("name", event.target.value)
        break;
      case "email":
        localStorage.setItem("email", event.target.value)
        break;
      case "data_nasc":
        localStorage.setItem("data_nasc", event.target.value)
        break;
      case "cpf":
        localStorage.setItem("cpf", event.target.value)
        break;
      case "telephone":
        localStorage.setItem("telephone", event.target.value)
        break;
      case "social_name":
        localStorage.setItem("social_name", event.target.value)
        break;
      case "cep":
        localStorage.setItem("cep", event.target.value)
        break;
      case "address":
        localStorage.setItem("address", event.target.value)
        break;
      case "city":
        localStorage.setItem("city", event.target.value)
        break;
      case "state":
        localStorage.setItem("state", event.target.value)
        break;
      
    }
  })
})


:root {
  --primary-color: #314c37;
  --primary-color-transparency: #314c37c7;
  --secondary-color: #627e54;
  --secondary-color-transparency: #627e54df;
  --tertiary-color: #446243;
  --card-color: #f9f3d0;
  --font-color: #fff;
  --font-color-dark: #000;
  --secondary-font-color: rgba(0, 0, 0, 0.48);
  --card-button-trace-color: #3b583d;
  --card-button-font-color: #59764f;

  --verificated-color: rgb(71, 104, 197);
  --nom-verificated-color: rgb(177, 52, 36);

  --project-card-color: #f9f3d0;

  /* novas variáveis */
  --background-color: transparent;
  --font-size-large: 2.3rem;
  --font-size-medium: 2rem;
  --font-size-small: 1.6rem;
  --font-size-button: 1.4rem;
  --font-size-heading: 1.9rem;
  --font-size-h1: 2rem;
  --font-size-h2: 2.3rem;
  --font-size-article: 1.8rem;
  --font-size-focus: 1.8rem;
  --gap-small: 1rem;
  --gap-medium: 2rem;
  --gap-large: 3rem;
  --width-full: 100%;
  --width-half: 50%;
  --width-card: 70%;
  --width-card-content: 75%;
  --width-button: 30%;
  --height-large: 80%;
  --height-medium: 3.5rem;
  --height-card: 17rem;
  --height-button: 3rem;
  --height-header: 74px;
  --height-footer: 40px;
  --border-radius: 15px;
  --border-radius-card: 10px;
  --border-radius-link: 20px;
  --border-width: 1px;
  --border-width-thick: 2px;
  --modal-background: rgba(0, 0, 0, 0.5);
  --modal-padding: 20px;
  --modal-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  --hover-color: #fff;
  --hover-bg-color: #273323;
  --hover-border-color: white;
  --animation-duration: 0.5s;
  --animation-ease: ease-in-out;
}