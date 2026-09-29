const main_rote = document.getElementById("main_rote")
const project_rote = document.getElementById("project_rote")
const sign_rote = document.getElementById("sign_rote")

const section_main = document.querySelector(".main")
const section_project = document.querySelector(".project")
const section_sign = document.querySelector(".sign_rote")

const img = document.querySelector(".backdrop_img")

main_rote.addEventListener("click", function (e) {
  e.preventDefault();
  section_project.style.display = "none"
  section_sign.style.display = "none"
  section_main.style.display  = "flex"
   img.style.display = "flex"
})

project_rote.addEventListener("click", e => {
  e.preventDefault();
  section_main.style.display = "none"
  section_sign.style.display = "none"
  img.style.display = "none"
  section_project.style.display = "flex"
})
sign_rote.addEventListener("click", e => {
  e.preventDefault();
  section_main.style.display = "none"
  section_sign.style.display = "flex"
  img.style.display = "none"
  section_project.style.display = "none"
})

