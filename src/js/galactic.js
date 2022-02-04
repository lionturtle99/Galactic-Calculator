export default class Galactic {
  constructor(earthAge, lifeEx, planet) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeEx;
    this.planet = planet;
  }

  calculateAge() {
    const e = this.earthAge;
    const l =this.lifeExpectancy;
    const p = (this.planet.toLowerCase());
    let age;
    let life;
    if (p === "mercury") {
      age = Math.floor(e/.24);
      life = Math.floor(l/.24);
    } 
    else if (p === "venus") {
      age = Math.floor(e/.62);
      life = Math.floor(l/.62);
    } 
    else if (p === "mars") {
      age = Math.floor(e/1.88);
      life = Math.floor(l/1.88);
    } 
    else if (p === "jupiter") {
      age = Math.floor(e/11.86);
      life = Math.floor(l/11.86);
    } 
    else {
      return "please input one of the listed planets";
    }
    return [age, life];
  }

  // calculateLifeExp() {

  // }
}