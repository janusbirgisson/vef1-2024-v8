/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { splitOnWhitespace } from "./lib/helpers.js";
import { longest as longestFunction } from "./lib/longest.js";
import { shortest as shortestFunction } from "./lib/shortest.js";
import { vowels as vowelsFunction } from "./lib/vowels.js";
import { consonants as consonantsFunction } from "./lib/consonants.js";
import { palindrome as palindromeFunction } from "./lib/palindrome.js";
import { reverse as reverseFunction } from "./lib/reverse.js";

const textareaElement = document.querySelector("textarea");
const formElement = document.querySelector("form");
const codeElement = document.querySelector("code .input");
const container = document.querySelector(".hidden");
const longestElement = document.querySelector(".longest");
const shortestElement = document.querySelector(".shortest");
const vowelsElement = document.querySelector(".vowels");
const consonantsElement = document.querySelector(".consonants");
const palindromeElement = document.querySelector(".palindrome");
const reverseElement = document.querySelector(".reversed");

/**
 * Sér um form submission event
 * Stöðvar default hegðun event-sins and skráir innihald textarea í console
 *
 * @param {Event} event - Form submission event
 */
function submitHandler(event) {
  event.preventDefault();
  const { target } = event;
  const textareaElement = target.querySelector("textarea");
  console.log("textareaElement inniheldur", textareaElement.value);
}
formElement.addEventListener("submit", submitHandler);

/**
 * Sér um input event fyrir textarea
 *
 * @param {Event} event - Input event sem er triggerað þegar gildi textarea breytist
 */
textareaElement.addEventListener("input", (event) => {
  const text = event.target.value.trim();
  codeElement.textContent = text;

  if (splitOnWhitespace(text).length > 0) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }

  longestElement.textContent = longestFunction(text);
  shortestElement.textContent = shortestFunction(text);
  vowelsElement.textContent = vowelsFunction(text);
  consonantsElement.textContent = consonantsFunction(text);
  palindromeElement.textContent = palindromeFunction(text) ? "" : "ekki";
  reverseElement.textContent = reverseFunction(text);
});
