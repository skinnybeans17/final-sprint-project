const imageArray = [
	"https://static.wikia.nocookie.net/battlefordreamisland/images/0/0a/Scissors_Cuts_Paper.png/revision/latest?cb=20211123200547",
    "https://static.wikia.nocookie.net/battlefordreamisland/images/b/b0/Paper_Covers_Rock.png/revision/latest?cb=20211123181933",
	"https://static.wikia.nocookie.net/battlefordreamisland/images/9/9c/Paper_Tie.png/revision/latest?cb=20211124164855"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}