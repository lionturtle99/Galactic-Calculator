import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Galactic from "./js/galactic.js";


let planetsOutput = (age, exp) => {
  console.log(age);
  $("#earth-age").html(age);
  $("#earth-exp").html(exp);
  $("#mercury-age").html(Math.floor(age/.24));
  $("#mercury-exp").html(Math.floor(exp/.24));
  $("#venus-age").html(Math.floor(age/.62));
  $("#venus-exp").html(Math.floor(exp/.62));
  $("#mars-age").html(Math.floor(age/1.88));
  $("#mars-exp").html(Math.floor(exp/1.88));
  $("#jupiter-age").html(Math.floor(age/11.86));
  $("#jupiter-exp").html(Math.floor(exp/11.86));
};

$(document).ready(function() {
  $("#submit").on("click", function() {
    let age = $("#age").val();
    let lifeExpectancy = $("#life-expect").val();
    let planet = $("#planet").val();
    let galactic = new Galactic(age, lifeExpectancy, planet);
    $("#result").html(galactic.calculator());
    planetsOutput(age, lifeExpectancy);
    
  });
});