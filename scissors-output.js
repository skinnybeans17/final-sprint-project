const imageArray = [
	"https://static.wikia.nocookie.net/battlefordreamisland/images/e/ef/Rock_Breaks_Scissors.png/revision/latest?cb=20211123182007",
    "https://static.wikia.nocookie.net/battlefordreamisland/images/0/0a/Scissors_Cuts_Paper.png/revision/latest?cb=20211123200547",
	"https://static.wikia.nocookie.net/battlefordreamisland/images/d/d8/Scissors_Tie.png/revision/latest?cb=20211124164921"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}