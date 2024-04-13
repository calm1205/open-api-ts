import { toCamel } from "./toCamel";

const snakeCase1 = "hello_world";
const snakeCase2 = "good_night_world";
const kebabCase1 = "hello-world";
const kebabCase2 = "good-night-world";

try {
  let result = true;
  if (toCamel(snakeCase1) !== "helloWorld") result = false;
  if (toCamel(snakeCase2) !== "goodNightWorld") result = false;
  if (toCamel(kebabCase1) !== "helloWorld") result = false;
  if (toCamel(kebabCase2) !== "goodNightWorld") result = false;

  if (!result) throw new Error("Test failed");
  console.log("Test passed");
} catch (error) {
  console.error(error);
}
