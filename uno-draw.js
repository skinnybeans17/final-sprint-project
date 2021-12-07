const imageArray = [
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red0.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red1.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red3.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red4.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red5.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red6.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red7.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red8.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-red9.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-redskip.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-redreverse.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-reddraw2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow0.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow1.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow3.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow4.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow5.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow6.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow7.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow8.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellow9.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellowskip.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellowreverse.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-yellowdraw2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green0.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green1.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green3.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green4.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green5.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green6.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green7.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green8.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-green9.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-greenskip.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-greenreverse.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-greendraw2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue0.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue1.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue3.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue4.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue5.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue6.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue7.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue8.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blue9.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-blueskip.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-bluereverse.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-bluedraw2.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-wildchange.png",
    "https://raw.githubusercontent.com/skinnybeans17/three-dice-rolls-outcomes/main/uno_card-wilddraw4.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
