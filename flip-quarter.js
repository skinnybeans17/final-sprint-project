const imageArray = [
	"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/2021-P_US_Quarter_Obverse.jpg/480px-2021-P_US_Quarter_Obverse.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2021_GW_crossing_Delaware_quarter_reverse.jpeg/480px-2021_GW_crossing_Delaware_quarter_reverse.jpeg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}