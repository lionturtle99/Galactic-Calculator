import Galactic from "./../src/js/galactic.js";

describe ("Galactic calculator", () => {
  test("It should create an object with the correct property values", () => {
    const galactic = new Galactic(27.10, 102, "planet");
    expect(galactic.earthAge).toEqual(27.10);
    expect(galactic.lifeExpectancy).toEqual(102);
    expect(galactic.planet).toBeDefined();
  });
  test("It should calculate the users Mercury age based their earth age", () => {
    const galactic = new Galactic(27, 120, "Mercury");
    expect(galactic.calculator()).toEqual("You have 388 years left to live on Mercury");
  });
  test("It should calculate the users Venus age based their earth age", () => {
    const galactic = new Galactic(22, 120, "Venus");
    expect(galactic.calculator()).toEqual("You have 158 years left to live on Venus");
  });
  test("It should calculate the users Mars age based their earth age", () => {
    const galactic = new Galactic(22, 120, "Mars");
    expect(galactic.calculator()).toEqual("You have 52 years left to live on Mars");
  });
  test("It should calculate the users Jupiter age based their earth age", () => {
    const galactic = new Galactic(22, 120, "Jupiter");
    expect(galactic.calculator()).toEqual("You have 9 years left to live on Jupiter");
  });
  test("It should return an error message", () => {
    const galactic = new Galactic(22, 120, "Jibberish");
    expect(galactic.calculator()).toEqual("please input one of the listed planets");
  });
  test("It should calculate the users Jupiter age based their earth age", () => {
    const galactic = new Galactic(100, 90, "Mars");
    expect(galactic.calculator()).toEqual("You are 6 years past your life expectancy on Mars");
  });
});