const input = document.querySelector("#input");
const selection = document.querySelector("#choices");
input.addEventListener("keyup", change);
selection.addEventListener("change", change);

document.querySelector("#output").style.visibility = "hidden";

/*function convert(e) {
  document.querySelector("#output").style.visibility = "visible";
  pounds = e.target.value;
  grams = pounds * 453.592;
  kilo = grams / 1000;
  ounces = pounds * 16;
  document.querySelector("#gramsOutput").textContent = grams;
  document.querySelector("#kilogramsOutput").textContent = kilo;
  document.querySelector("#ozOutput").textContent = ounces;
}*/

function change(e) {
  document.querySelector("#output").style.visibility = "visible";
  let input = document.querySelector("#input").value;
  let selection = document.querySelector("#choices").value;

  let pounds_coef, g_coef, kg_coef, oz_coef;
  switch (selection) {
    case "g":
      pounds_coef = 0.00220462;
      g_coef = 1;
      kilo_coef = 0.001;
      oz_coef = 0.035274;
      break;
    case "kg":
      pounds_coef = 2.20462;
      g_coef = 1000;
      kilo_coef = 1;
      oz_coef = 35.274;
      break;
    case "oz":
      pounds_coef = 0.0625;
      g_coef = 28.3495;
      kilo_coef = 0.0283495;
      oz_coef = 1;
      break;

    default:
      pounds_coef = 1;
      g_coef = 453.592;
      kilo_coef = 0.453592;
      oz_coef = 16;
      break;
  }

  pounds = input * pounds_coef;
  grams = input * g_coef;
  kilo = input * kilo_coef;
  ounces = input * oz_coef;

  document.querySelector("#gramsOutput").textContent = grams;
  document.querySelector("#kilogramsOutput").textContent = kilo;
  document.querySelector("#poundsoutput").textContent = pounds;
  document.querySelector("#ozOutput").textContent = ounces;
}
