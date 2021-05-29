const images = [
	{ id: 0, img: "Kő.png" },
	{ id: 1, img: "Papír.png" },
	{ id: 2, img: "Olló.png" },
];
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const img = document.querySelector(".slide-img");

// prevBtn.addEventListener("click", PrevImg);
nextBtn.addEventListener("click", NextImg);

// Store current image name
let currentImgIndex = images[0].id; // 0
// Initialize with the current image
slider.innerHTML = `<img src="img/${images[currentImgIndex].img}">`; // Kő.png

// console.log(typeof images);
function NextImg() {
	// If the current index is not equal to the images object's length
	// then increase the current index.
	// Else set the current index to 0 so we can start from the beginning.
	if (currentImgIndex !== images.length - 1) {
		currentImgIndex++;
		slider.innerHTML = `<img src="img/${images[currentImgIndex].img}">`;
	} else {
		currentImgIndex = 0;
		slider.innerHTML = `<img src="img/${images[currentImgIndex].img}">`;
	}
}
