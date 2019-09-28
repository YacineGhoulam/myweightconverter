const input = document.querySelector("#input");
input.addEventListener("input", convert);
document.querySelector("#output").style.visibility = "hidden";

function convert(e) {
  document.querySelector("#output").style.visibility = "visible";
  pounds = e.target.value;
  grams = pounds * 453.592;
  kilo = grams / 1000;
  ounces = pounds * 16;
  document.querySelector("#gramsOutput").textContent = grams;
  document.querySelector("#kilogramsOutput").textContent = kilo;
  document.querySelector("#ozOutput").textContent = ounces;
}
