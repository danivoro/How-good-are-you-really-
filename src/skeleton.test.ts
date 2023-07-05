import betterThanAverage from "./skeleton";

test("Codewars tests", () => {
  expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toEqual(true);
});


test.skip("sum adds two numbers cancelling", () => {
  expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)).toEqual(true);
});


