const imageArray = [
	"https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}