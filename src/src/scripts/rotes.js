const main_rote = document.getElementById("main_rote")
const project_rote = document.getElementById("project_rote")
const sign_rote = document.getElementById("sign_rote")
const home_rote = document.querySelector("[data-route='inicio']")
const menuToggle = document.querySelector(".menu-toggle")
const header = document.querySelector("header")

const section_main = document.querySelector(".main")
const section_project = document.querySelector(".project")
const section_sign = document.querySelector(".sign_rote")

const img = document.querySelector(".backdrop_img")

function closeMenu() {
  header.classList.remove("menu-open")
  menuToggle.setAttribute("aria-expanded", "false")
  menuToggle.setAttribute("aria-label", "Abrir menu")
}

function showHome() {
  section_project.style.display = "none"
  section_sign.style.display = "none"
  section_main.style.display = "flex"
  img.style.display = "flex"
  closeMenu()
}

function showProjects() {
  section_main.style.display = "none"
  section_sign.style.display = "none"
  img.style.display = "none"
  section_project.style.display = "flex"
  closeMenu()
}

function showSign() {
  section_main.style.display = "none"
  section_sign.style.display = "flex"
  img.style.display = "none"
  section_project.style.display = "none"
  closeMenu()
}

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open")
  menuToggle.setAttribute("aria-expanded", String(isOpen))
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu")
})

document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    closeMenu()
  }
})

main_rote.addEventListener("click", function (e) {
  e.preventDefault();
  showHome()
})

home_rote.addEventListener("click", function (e) {
  e.preventDefault();
  showHome()
})

project_rote.addEventListener("click", e => {
  e.preventDefault();
  showProjects()
})

sign_rote.addEventListener("click", e => {
  e.preventDefault();
  showSign()
})
