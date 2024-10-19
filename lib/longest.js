import { isString, splitOnWhitespace } from "./helpers.js";

/**
 * Finnur lengsta orðið í gefnum streng
 *
 * @param {string} str - Strengur sem er gefinn inn í fallið
 * @returns {string|null} - Skilar lengsta orðinu í streng ef hann er gildur, skilar null ef inntakið er ekki strengur
 *
 */
export function longest(str) {
  if (isString(str)) {
    let longestWord = "";
    for (const word of splitOnWhitespace(str)) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  return null;
}
console.assert(
  longest("vertu sæll og blessaður") === "blessaður",
  "longest: skilar lengsta orði í streng"
);
console.assert(
  longest(false) === null,
  "longest: ef ekki strengur, þá skila null"
);
console.assert(
  longest("") === "",
  "longest: ef tómur strengur, þá skila tómum streng"
);
