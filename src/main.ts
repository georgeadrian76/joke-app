// installed npm (testing)

import "./index.css";

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
import { type Category, type SingleJoke, type TwoPartJoke } from "./types";
import { fetchJoke } from "./utils";

// https://www.typescripttutorial.net/typescript-tutorial/type-casting/
const jokeElement = document.getElementById("joke") as HTMLElement;
const categoryForm = document.getElementById("categoryForm") as HTMLElement;

categoryForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Retrieve selected categories

  const inputEl = document.getElementsByTagName("input")[0];
  const test = inputEl.value;
  console.log(test);

  // categories.forEach((e) => console.log(e.value));

  const selectedCategories: Category[] = [];

  const joke = await fetchJoke(selectedCategories);
  // const category = joke.category;

  selectedCategories.push(joke.category);
  console.log(selectedCategories);

  displayJoke(joke);
});

// Function to display joke
function displayJoke(joke: SingleJoke | TwoPartJoke) {
  const test = joke.type;

  console.log(test);
  // TODO: Implement a feature to blur flagged jokes and provide a button to unblur them.
  const div = document.createElement("div");
  div.innerHTML = `${test}`;
  jokeElement.appendChild(div);
}
