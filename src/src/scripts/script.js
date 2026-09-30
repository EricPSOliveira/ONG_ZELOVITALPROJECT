import "../../public/styles/reset.css";
import "../../public/styles/variables.css";
import "../../public/styles/main.css";

import "../../public/styles/cadastro/sign.css";

import "../../public/styles/projetos/cards.css";
import "../../public/styles/projetos/projeto.css";

import "../../public/styles/mobile.css";

import "./format.js";
import "./rotes.js";
import "./submit.js";

import "../assets/images/Cadastro.png";
import "../assets/images/Confirmar.png";
import "../assets/images/error.png";
import "../assets/images/icon_arrow.png";
import "../assets/images/icon.png";
import "../assets/images/kmore.png";
import "../assets/images/Lines.svg";
import "../assets/images/Semiground.svg";
import "../assets/images/Semigroundtwo.svg";
import "../assets/images/Status.png";
import "../assets/images/Toast.png";

const card_container = document.querySelector(".card_container")
import { Card } from "./cards.js";

const itens = [
  {
    title: "PRESERVAÇÃO DE RIOS",
    description: "Trabalhamos na proteção e recuperação de rios e nascentes, garantindo água para as próximas eras."
  },
  {
    title: "REFLORESTAMENTO",
    description: "Promovemos o plantio de árvores nativas, restaurando áreas degradadas e contribuindo para a biodiversidade e o equilíbrio ambiental."
  },
  {
    title: "EDUCAÇÃO AMBIENTAL",
    description: "Promovemos a conscientização sobre a importância da preservação ambiental, incentivando práticas sustentáveis e o respeito à natureza."
  },
  {
    title: "APOIO ÀS COMUNIDADES",
    description: "Apoiamos comunidades locais com projetos que promovem sustentabilidade, geração de renda e melhoria na qualidade de vida."
  }
];
itens.map((item, index) => {
  const createElement = new Card(item.title, item.description);
  const element = createElement.createElement()
  card_container.appendChild(element);
})


const normalModeButton = document.getElementById("normal-mode");
const darkModeButton = document.getElementById("dark-mode");
const highContrastButton = document.getElementById("high-contrast");

const modes = {
  normal: "normal",
  dark: "dark",
  highContrast: "high-contrast"
};

function updateButtons(activeMode) {
  normalModeButton.setAttribute(
    "aria-pressed",
    activeMode === modes.normal
  );

  darkModeButton.setAttribute(
    "aria-pressed",
    activeMode === modes.dark
  );

  highContrastButton.setAttribute(
    "aria-pressed",
    activeMode === modes.highContrast
  );
}

function applyMode(mode) {
  document.body.classList.remove("dark-mode", "high-contrast", "light-mode");

  if (mode === modes.dark) {
    document.body.classList.add("dark-mode");
  }

  if (mode === modes.highContrast) {
    document.body.classList.add("high-contrast");
  }

  if (mode === modes.normal) {
    document.body.classList.add("light-mode");
  }

  updateButtons(mode);
  localStorage.setItem("zelovital-accessibility-mode", mode);
}

function loadMode() {
  const savedMode = localStorage.getItem("zelovital-accessibility-mode");

  if (
    savedMode === modes.normal ||
    savedMode === modes.dark ||
    savedMode === modes.highContrast
  ) {
    applyMode(savedMode);
    return;
  }

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (prefersDarkMode) {
    applyMode(modes.dark);
    return;
  }

  applyMode(modes.normal);
}

normalModeButton.addEventListener("click", () => {
  applyMode(modes.normal);
});

darkModeButton.addEventListener("click", () => {
  applyMode(modes.dark);
});

highContrastButton.addEventListener("click", () => {
  applyMode(modes.highContrast);
});

loadMode();
