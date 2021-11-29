const imageArray = [
	"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/480px-US_One_Cent_Obv.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US_One_Cent_Rev.png/480px-US_One_Cent_Rev.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}