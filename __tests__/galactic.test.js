import Galactic from "./../src/js/galactic.js";

describe ("Galactic calculateAge", () => {
  test("It should create an object with the correct property values", () => {
    const galactic = new Galactic(27.10, 102, "planet");
    expect(galactic.earthAge).toEqual(27.10);
    expect(galactic.lifeExpectancy).toEqual(102);
    expect(galactic.planet).toBeDefined();
  });
  test("It should calculate the users Mercury age based their earth age", () => {
    const galactic = new Galactic(27, 120, "Mercury");
    expect(galactic.calculateAge()).toEqual([112, 500]);
  });
  test("It should calculate the users Venus age based their earth age", () => {
    const galactic = new Galactic(22, 120, "Venus");
    expect(galactic.calculateAge()).toEqual([35, 193]);
  });
  test("It should calculate the users Mars age based their earth age", () => {
    const galactic = new Galactic(22, 120, "Mars");
    expect(galactic.calculateAge()).toEqual([11, 63]);
  });
  test("It should calculate the users Jupiter age based their earth age", () => {
    const galactic = new Galactic(22, 120, "Jupiter");
    expect(galactic.calculateAge()).toEqual([1, 10]);
  });
  test("It should return an error message", () => {
    const galactic = new Galactic(22, 120, "Jibberish");
    expect(galactic.calculateAge()).toEqual("please input one of the listed planets");
  });

  // test("It should calculate the years left to live or years over life expectancy on any given planet") {
  //   const galactic = new Galactic(27,120,"Mercury");
  //   expect(galactic.calculateLifeExp().toEqual());
  // }
});