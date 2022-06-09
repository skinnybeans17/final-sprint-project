const imageArray = [
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/3.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/4.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/5a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/5b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/6a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/6b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/6c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/7a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/7b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/7c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/7d.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/8a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/8b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/8c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/8d.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/8e.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/9a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/9b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/9c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/9d.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/9e.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/9f.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/10a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/10b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/10c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/10d.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/10e.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/10f.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/11a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/11b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/11c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/11d.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/11e.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/11f.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/12a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/12b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/12c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/12d.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/12e.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/12f.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/13a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/13b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/13c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/13d.png",
	"https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/13e.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/14a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/14b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/14c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/14d.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/15a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/15b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/15c.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/16a.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/16b.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/17.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/18.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}