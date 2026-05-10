const display = document.getElementById("display");
const container = document.getElementById("container-tombol");

let angkaPertama = "";
let operator = "";
let menungguAngkaKedua = false;

container.addEventListener("click", function(e) {

  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.dataset.value;

  handleInput(value);
});

function handleInput(value) {
    if (value === "C") {
    display.value = "";
    angkaPertama = "";
    operator = "";
    menungguAngkaKedua = false;
    return;
  }
  if (["+", "-", "*", "/"].includes(value)) {
    angkaPertama = display.value;
    operator = value;
    menungguAngkaKedua = true;
    return;
  }
if (value === "=") {

    const angkaKedua = display.value;

    let hasil = 0;

    switch(operator) {
      case "+":
        hasil = parseFloat(angkaPertama) + parseFloat(angkaKedua);
        break;

      case "-":
        hasil = parseFloat(angkaPertama) - parseFloat(angkaKedua);
        break;

      case "*":
        hasil = parseFloat(angkaPertama) * parseFloat(angkaKedua);
        break;

      case "/":
        hasil = parseFloat(angkaPertama) / parseFloat(angkaKedua);
        break;
    }
    display.value = hasil;

    angkaPertama = "";
    operator = "";
    menungguAngkaKedua = false;

    return;
  }
  if (menungguAngkaKedua) {
    display.value = "";
    menungguAngkaKedua = false;
  }

  display.value += value;
}
document.addEventListener("keydown", function(e) {

  const key = e.key;
   if (!isNaN(key) || key === ".") {
    handleInput(key);
  }
   if (["+", "-", "*", "/"].includes(key)) {
    handleInput(key);
  }
   if (key === "Enter") {
    handleInput("=");
  }
 if (key === "Escape") {
    handleInput("C");
  }
});