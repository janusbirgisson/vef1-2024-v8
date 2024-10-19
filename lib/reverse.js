import { isString } from "./helpers.js";

/**
 * Snýr gefnum streng við
 *
 * @param {string} str -  Strengur sem á að snúa við
 * @returns {string|null} - Skilar strengnum snúnum við ef inntakið er strengur, skila null ef inntakið er ekki strengur.
 */
export function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("hallo") === "ollah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, þá skila null"
);
