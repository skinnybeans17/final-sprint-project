const imageArray = [
	"https://freepngimg.com/thumb/money/48924-5-nickel-photos-free-transparent-image-hq.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/US_Nickel_2013_Rev.png/480px-US_Nickel_2013_Rev.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}