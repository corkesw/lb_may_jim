const {
  measureNumberOfIncreasesInDepth,
  measureIncreasesInSlidingWindow,
} = require("..");

describe("measureNumberOfIncreaseInDepth", () => {
  test("should return 0 when passed an empty array", () => {
    expect(measureNumberOfIncreasesInDepth([])).toBe(0);
  });
  test("should return 0 when there is an array of 2 consecutive decreasing numbers", () => {
    expect(measureNumberOfIncreasesInDepth([1, 0])).toBe(0);
  });
  test("should return 0 when there is an array of 2 consecutive same numbers", () => {
    expect(measureNumberOfIncreasesInDepth([1, 1])).toBe(0);
  });
  test("should return 1 when there is an array of 2 consecutive increasing numbers", () => {
    expect(measureNumberOfIncreasesInDepth([1, 2])).toBe(1);
  });
  test("should add up increases and ignore decreases in a longer array", () => {
    expect(measureNumberOfIncreasesInDepth([1, 2, 3, 2])).toBe(2);
    expect(
      measureNumberOfIncreasesInDepth([1, 1, 2, 1, 2, 3, 1, 6, 1, 7, 8, 9, 10])
    ).toBe(8);
  });
});

describe("measureIncreasesInSlidingWindow", () => {
  test("should return 0 when passed an array 3 or less in length", () => {
    expect(measureIncreasesInSlidingWindow([])).toBe(0);
    expect(measureIncreasesInSlidingWindow([1, 2, 3])).toBe(0);
  });
  test("should return 1 when the sum of the second 3 numbers are higher than the sum of the first three numbers in an array of 4 numbers", () => {
    expect(measureIncreasesInSlidingWindow([1, 2, 3, 4])).toBe(1);
  });
  test("should return 0 when the sum of the second 3 numbers are higher than the sum of the first three numbers in an array of 4 numbers", () => {
    expect(measureIncreasesInSlidingWindow([4, 3, 2, 1])).toBe(0);
  });
  test("should return 0 when the sum of the second 3 numbers is the same as the sum of the first three numbers in an array of 4 numbers", () => {
    expect(measureIncreasesInSlidingWindow([4, 7, 1, 4])).toBe(0);
  });
  test("should add up increases and ignore decreases in a longer array", () => {
    expect(measureIncreasesInSlidingWindow([4, 7, 1, 6, 4, 7, 8, 1])).toBe(3);
  });
});
