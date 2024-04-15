import { snake2Camel } from "./snake2Camel";

const snakeCase1 = "hello_world";
const snakeCase2 = "good_night_world";
const kebabCase1 = "hello-world";
const kebabCase2 = "good-night-world";

try {
  let result = true;
  if (snake2Camel(snakeCase1) !== "helloWorld") result = false;
  if (snake2Camel(snakeCase2) !== "goodNightWorld") result = false;
  if (snake2Camel(kebabCase1) !== "helloWorld") result = false;
  if (snake2Camel(kebabCase2) !== "goodNightWorld") result = false;

  if (!result) throw new Error("Test failed");
  console.log("Test passed");
} catch (error) {
  console.error(error);
}
