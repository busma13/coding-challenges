const hIndex = require("./274H-Index.ts");

describe("When a researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively", () => {
  it("should return 3", () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  });
});

describe("When a researcher has 3 papers in total and each of them had received 1, 3, 1 citations respectively", () => {
  it("should return 1", () => {
    expect(hIndex([1, 3, 1])).toBe(1);
  });
});
