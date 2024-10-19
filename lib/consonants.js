import { isString } from "./helpers.js";

const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/**
 * Telur fjölda samhljóða í gefnum streng.
 *
 * @param {string} str - Strengur sem á að telja fjölda samhljóða í
 * @returns {number} - Skilar fjölda samhljóða í strengnum, skilar 0 ef inntakið er ekki strengur.
 */
export function consonants(str) {
  let count = 0;
  if (isString(str)) {
    const split = str.toLowerCase().split("");

    for (const char of split) {
      if (CONSONANTS.includes(char)) {
        count++;
      }
    }
  }
  return count;
}
console.assert(
  consonants("Lambakótilettur") === 9,
  "consonants: skilar fjölda samhljóða í streng, óháð stærð stafa"
);
console.assert(
  consonants(false) === 0,
  "consonants: ef ekki strengur, þá skila 0"
);
console.assert(
  consonants("") === 0,
  "consonants: ef tómur strengur, þá skila 0"
);
