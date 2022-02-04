export default class Galactic {
  constructor(earthAge, lifeEx, planet) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeEx;
    this.planet = planet;
  }

  calculator() {
    const e = this.earthAge;
    const l =this.lifeExpectancy;
    const p = (this.planet.toLowerCase());
    let age;
    let life;
    if (p === "mercury") {
      age = Math.floor(e/.24);
      life = Math.floor(l/.24);
    } else if (p === "venus") {
      age = Math.floor(e/.62);
      life = Math.floor(l/.62);
    } else if (p === "mars") {
      age = Math.floor(e/1.88);
      life = Math.floor(l/1.88);
    } else if (p === "jupiter") {
      age = Math.floor(e/11.86);
      life = Math.floor(l/11.86);
    } else {
      return "please input one of the listed planets";
    }

    let firstToUp = p.charAt(0).toUpperCase();
    let sliced = p.slice(1, p.length);
    let corrected = firstToUp + sliced;
    let number = Math.abs(life-age); 
  
    if (life - age <= 0) {
      return ("You are "+number+" years past your life expectancy on "+corrected);
    } 
    else {
      return ("You have "+number+" years left to live on "+corrected);
    }
  }
}