class Card {
  constructor(name, text, url) {
    this.name = name;
    this.text = text;
    this.url = url;
  }

  createElement() {
    const div_card = document.createElement("div");
    const h2_card = document.createElement("h2");
    const p_card = document.createElement("p");
    const button_card = document.createElement("button");
    h2_card.textContent = this.name;
    p_card.textContent = this.text;
    button_card.textContent = "Saiba mais";
    button_card.setAttribute("title", "Saiba_mais");
    button_card.setAttribute("type", "button");
    button_card.addEventListener("click", e=>{
      window.location.href = this.url;
    })
    div_card.classList.add("card")
    div_card.appendChild(h2_card)
    div_card.appendChild(p_card)
    div_card.appendChild(button_card);
    return div_card;

    // <div class="card">
    //   <h2>EDUCAÇÃO AMBIENTAL</h2>
    //   <p>Promovemos a conscientização sobre a importância da preservação ambiental, incentivando práticas
    //     sustentáveis e o respeito à natureza.</p>
    //   <button title="Saiba_mais" type="button">Saiba mais - &gt; </button>
    // </div>
  }


  setName(name) {
    this.name = name
  }
  setText(text) {
    this.text = text
  }
  setURL(url) {
    this.url = url
  }
  getName() {
    return this.name;
  }
  getText() {
    return this.text;
  }
  getURL() {
    return this.url;
  }


}