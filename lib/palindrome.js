import { isString } from "./helpers.js";

/**
 * Athugar hvort gefinn strengur sé samhverfa.
 *
 * @param {string} str - Strengurinn sem á að athuga hvort sé samhverfa
 * @returns {boolean} - Skilar true ef strengur er samhverfa, annars skilar það false.
 */
export function palindrome(str) {
  if (isString(str) && str != "") {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
  }
  return false;
}
console.assert(
  palindrome("raksápupáskar") === true,
  "palindrome: skilar true ef strengur er samhverfur"
);
console.assert(
  palindrome("haH") === true,
  "palindrome: skilar true ef strengur er samhverfur, óháð stærð stafa"
);
console.assert(
  palindrome("eitthvað") === false,
  "palindrome: skilar false ef strengur er ekki samhverfur"
);
console.assert(
  palindrome(false) === false,
  "palindrome: ef ekki strengur, þá skila false"
);
console.assert(
  palindrome("") === false,
  "palindrome: ef tómur strengur, þá skila false"
);
