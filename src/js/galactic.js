export default class Galactic {
  constructor(earthAge, planet) {
    this.earthAge = earthAge;
    this.planet = planet;
  }

  calculator() {
    const e = this.earthAge;
    const p = (this.planet.toLowerCase());
    let result;
    if (p === "mercury") {
      result = Math.floor(e/.24); 
    } 
    else if (p === "venus") {
      result = Math.floor(e/.62);
    } 
    else if (p === "mars") {
      result = Math.floor(e/1.88);
    } 
    else if (p === "jupiter") {
      result = Math.floor(e/11.86);
    } 
    else {
      result = "please input one of the listed planets";
    }
    return result;
  }
}