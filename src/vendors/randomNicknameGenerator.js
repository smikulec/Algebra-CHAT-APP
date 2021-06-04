import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";

function createRandomNickname() {
  const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    length: 2,
    separator: " ",
    style: "capital",
  });
  return shortName;
}

export { createRandomNickname };
