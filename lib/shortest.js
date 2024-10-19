import { isString, splitOnWhitespace } from "./helpers.js";

/**
 * Finnur stysta orðið í gefnum streng
 *
 * @param {string} str - Strengur sem er gefinn inn í fallið
 * @returns {string|null} - Skilar stysta orðinu í streng ef hann er gildur, skilar null ef inntakið er ekki strengur
 *
 */
export function shortest(str) {
  if (isString(str)) {
    let shortestWord = "";
    for (const word of splitOnWhitespace(str)) {
      if (shortestWord === "" || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
    return shortestWord;
  }
  return null;
}
console.assert(
  shortest("vertu sæll og blessaður") === "og",
  "shortest: skilar stysta orði í streng"
);
console.assert(
  shortest(false) === null,
  "shortest: ef ekki strengur, þá skila null"
);
console.assert(
  shortest("") === "",
  "shortest: ef tómur strengur, þá skila tómum streng"
);
