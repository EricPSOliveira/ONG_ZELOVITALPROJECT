const card_container = document.querySelector(".card_container")

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
