const imageArray = [
	"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/2021-P_US_Quarter_Obverse.jpg/480px-2021-P_US_Quarter_Obverse.jpg",
    "https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}