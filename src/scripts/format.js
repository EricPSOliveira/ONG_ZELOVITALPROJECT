const cpf = document.getElementById("cpf");

cpf.addEventListener("input", e => {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = value;
});

const phone = document.getElementById("telephone");
phone.addEventListener("input", e => {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  value = value.substring(0, 15); // Limit to (xx) xxxxx-xxxx
  e.target.value = value;
});

const cep = document.getElementById("cep");
cep.addEventListener("input", e => {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  value = value.substring(0, 9); // Limit to xxxxx-xxx
  e.target.value = value;
});