const imageArray = [
	"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/486px-2017-D_Roosevelt_dime_obverse_transparent.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/486px-2017-D_Roosevelt_dime_reverse_transparent.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}