const imageArray = [
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red0.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red1.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red3.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red4.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red5.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red6.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red7.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red8.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-red9.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-redskip.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-redreverse.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-reddraw2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow0.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow1.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow3.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow4.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow5.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow6.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow7.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow8.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellow9.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellowskip.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellowreverse.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-yellowdraw2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green0.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green1.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green3.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green4.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green5.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green6.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green7.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green8.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-green9.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-greenskip.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-greenreverse.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-greendraw2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue0.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue1.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue3.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue4.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue5.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue6.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue7.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue8.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blue9.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-blueskip.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-bluereverse.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-bluedraw2.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-wildchange.png",
    "http://unocardinfo.victorhomedia.com/graphics/uno_card-wilddraw4.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
