import { camel2Snake } from "./camel2Snake";

const camelCase1 = "helloWorld";
const camelCase2 = "goodNightWorld";

try {
  let result = true;
  if (camel2Snake(camelCase1) !== "hello_world") result = false;
  if (camel2Snake(camelCase2) !== "good_night_world") result = false;

  if (!result) throw new Error("Test failed");
  console.log("Test passed");
} catch (error) {
  console.error(error);
}
