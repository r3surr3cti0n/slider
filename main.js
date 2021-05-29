const images = ["Kő.png", "Papír.png", "Olló.png"];
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const img = document.querySelector(".slide-img");

// prevBtn.addEventListener("click", PrevImg);
// nextBtn.addEventListener("click", NextImg);

let currentImg = img.getAttribute("src");
let currentImgName = currentImg.slice(4, currentImg.length);
let currentImgIndex = () => {
	for (let i = 0; i < images.length; i++) {
		if (images[i] === currentImgName) {
			return i;
		}
	}
};

// function NextImg() {}
// function PrevImg(params) {}
