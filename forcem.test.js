const forcem = require("./forcem");

describe("ForcemIpsum", () => {
  test("Episode 1", () => {
    const output = "Captain. Yes, sir? Tell them we wish to board at once.";
    expect(forcem("1", 5)[0]).toContain(output);
  });
  test("Episode 4", () => {
    const output = "Did you hear that? They've shut down the main reactor.";
    expect(forcem("4", 5)[0]).toContain(output);
  });
  test("Episode 5", () => {
    const output = "Echo Three to Echo Seven. Han, old buddy, do you read me?";
    expect(forcem("5", 5)[0]).toContain(output);
  });
  test("Episode 6", () => {
    const output = "Command station, this is ST 321. Code Clearance Blue.";
    expect(forcem("6", 5)[0]).toContain(output);
  });
  test("Episode 7", () => {
    const output = "This will begin to make things right. I've traveled too far, and seen too much, to ignore the despair in the galaxy.";
    expect(forcem("7", 5)[0]).toContain(output);
  });
  test("Episode 8", () => {
    const output = "We're not clear yet! there's still 30 pallets of cannon shells in C bunker.";
    expect(forcem("8", 5)[0]).toContain(output);
  });
  test("Episode 9", () => {
    const output = "At last, Snoke trained you well. I killed Snoke, I'll kill you.";
    expect(forcem("9", 5)[0]).toContain(output);
  });
  test("Planets", () => {
    expect(forcem("planets", 101).length).toBe(101);
  });
  test("Characters", () => {
    expect(forcem("characters", 101).length).toBe(101);
  });
});