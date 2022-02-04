import Galactic from "./../src/js/galactic.js";

describe ("Galactic calculator", () => {
  test("It should create an object with the correct property values", () => {
    const galactic = new Galactic(27.10, 50);
    expect(galactic.earthAge).toEqual(27.10);
    expect(galactic.planet).toBeDefined();
  });
});

// expect(galactic.mercuryAge).toBeCloseTo();
// expect(galactic.venusAge).toBeCloseTo();
// expect(galactic.marsAge).toBeCloseTo();
// expect(galactic.jupiterAge).toBeCloseTo();