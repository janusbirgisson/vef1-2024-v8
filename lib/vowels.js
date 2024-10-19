import { isString } from "./helpers.js";

const VOWELS = "aeiouyáéýúíóöæ".split("");

/**
 * Telur fjölda sérhljóða í gefnum streng.
 *
 * @param {string} str - Strengur sem á að telja fjölda sérhljóða í
 * @returns {number} - Skilar fjölda sérhljóða í strengnum, skilar 0 ef inntakið er ekki strengur.
 */
export function vowels(str) {
  let count = 0;
  if (isString(str)) {
    const split = str.toLowerCase().split("");

    for (const char of split) {
      if (VOWELS.includes(char)) {
        count++;
      }
    }
  }
  return count;
}
console.assert(
  vowels("lambAkótilettur") === 6,
  "vowles: skilar fjölda sérhljóða í streng, óháð stærð stafa"
);
console.assert(vowels(false) === 0, "vowles: ef ekki strengur, þá skila 0");
console.assert(vowels("") === 0, "vowles: ef tómur strengur, þá skila 0");
