import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Galactic from "./js/galactic.js";

$(document).ready(function() {
  $("#submit").on("click", function() {
    let age = $("#age").val();
    let lifeExpectancy = $("#life-expect").val();
    let planet = $("#planet").val();
    let galactic = new Galactic(age, lifeExpectancy, planet);
    let result = galactic.calculator();
    
  });
});