import { toCamelDeep } from "./toCamelDeep";

const snakeCaseObject1 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_student: false,
  hobbies: ["reading", "travelling"],
  address: {
    street_address: "123 Main St",
    city: "New York",
    zip_code: "10030",
  },
  skills: [
    {
      skill_name: "JavaScript",
      experience_in_years: 5,
    },
    {
      skill_name: "TypeScript",
      experience_in_years: 3,
    },
  ],
};

try {
  const camelCaseObject1 = toCamelDeep(snakeCaseObject1);
  const result =
    JSON.stringify(camelCaseObject1) ===
    JSON.stringify({
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isStudent: false,
      hobbies: ["reading", "travelling"],
      address: {
        streetAddress: "123 Main St",
        city: "New York",
        zipCode: "10030",
      },
      skills: [
        {
          skillName: "JavaScript",
          experienceInYears: 5,
        },
        {
          skillName: "TypeScript",
          experienceInYears: 3,
        },
      ],
    });

  if (!result) throw new Error("Test failed");
  console.log("Test passed");
} catch (error) {
  console.error(error);
}
