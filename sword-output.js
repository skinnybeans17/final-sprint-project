const imageArray = [
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/sword%20win.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/sword%20lose.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/sword%20tie.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}