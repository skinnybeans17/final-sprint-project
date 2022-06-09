const imageArray = [
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/Rock%20Breaks%20Scissors.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/Paper%20Covers%20Rock.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/Rocks%20Tie.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}