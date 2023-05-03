const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array with the same length as the input array", () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffle(input);
    expect(shuffled).toHaveLength(input.length);
  });

  test("produce a different order than the input array", () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffle(input);
    expect(shuffled).not.toEqual(input);
  });
});
