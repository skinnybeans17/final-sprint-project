const imageArray = [
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-10-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-10-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-12-Showing.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-11-Showing.png",
	"https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-9-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-8-Showing-C.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-8-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-8-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-9-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-7-Showing-C.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-7-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-7-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-6-Showing-C.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-6-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-6-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-5-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-5-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-4-Showing-B.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-4-Showing-A.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-3-Showing.png",
    "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Two-Dice-with-2-Showing.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}