const temps = [7, 12, "16", 3, -8, -13, undefined, 10, 24, "banana", 32];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const expectedResult = {
  1: { val: 7, color: "yellow", day: "Mon" },
  2: { val: 12, color: "orange", day: "Tue" },
  3: { val: 16, color: "orange", day: "Wed" },
  4: { val: 3, color: "white", day: "Thu" },
  // ...
  7: { val: 10, color: "yellow", day: "Sun" },
  8: { val: 24, color: "red", day: "Mon" }
  // ...
};
