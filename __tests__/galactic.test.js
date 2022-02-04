import Galactic from "./../src/js/galactic.js";

describe ("Galactic calculator", () => {
  test("It should create an object with the correct property values", () => {
    const galactic = new Galactic(27.10, 50);
    expect(galactic.earthAge).toEqual(27.10);
    expect(galactic.planet).toBeDefined();
  });
  test("It should calculate the users Mercury age based their earth age", () => {
    const galactic = new Galactic(27, "Mercury");
    expect(galactic.calculator()).toBeCloseTo(112);
  });
  test("It should calculate the users Venus age based their earth age", () => {
    const galactic = new Galactic(22, "Venus");
    expect(galactic.calculator()).toBeCloseTo(35);
  });
  test("It should calculate the users Mars age based their earth age", () => {
    const galactic = new Galactic(22, "Mars");
    expect(galactic.calculator()).toBeCloseTo(11);
  });
  test("It should calculate the users Jupiter age based their earth age", () => {
    const galactic = new Galactic(22, "Jupiter");
    expect(galactic.calculator()).toBeCloseTo(1);
  });
});