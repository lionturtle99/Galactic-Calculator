import Galactic from "./../src/js/galactic.js";

describe ("Galactic calculateAge", () => {
  test("It should create an object with the correct property values", () => {
    const galactic = new Galactic(27.10, 102, "planet");
    expect(galactic.earthAge).toEqual(27.10);
    expect(galactic.lifeExpectancy).toEqual(102);
    expect(galactic.planet).toBeDefined();
  });
  test("It should calculate the users Mercury age based their earth age", () => {
    const galactic = new Galactic(27, 102, "Mercury");
    expect(galactic.calculateAge()).toBeCloseTo(112);
  });
  test("It should calculate the users Venus age based their earth age", () => {
    const galactic = new Galactic(22, 102, "Venus");
    expect(galactic.calculateAge()).toBeCloseTo(35);
  });
  test("It should calculate the users Mars age based their earth age", () => {
    const galactic = new Galactic(22, 102, "Mars");
    expect(galactic.calculateAge()).toBeCloseTo(11);
  });
  test("It should calculate the users Jupiter age based their earth age", () => {
    const galactic = new Galactic(22, 102, "Jupiter");
    expect(galactic.calculateAge()).toBeCloseTo(1);
  });
  test("It should return an error message", () => {
    const galactic = new Galactic(22, 102, "Jibberish");
    expect(galactic.calculateAge()).toEqual("please input one of the listed planets");
  });
});