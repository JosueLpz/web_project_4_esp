import "./styles/index.css";
import stepsSrc from "./images/steps.png";

const numbers = [2, 3, 5];
const doubledNumbers = numbers.map((number) => number * 2);

const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;
