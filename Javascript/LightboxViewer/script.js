const galleryImages = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryImages.forEach(element => {
	element.addEventListener("click", () => {
		lightBoxImage.src = element.getAttribute("src").replace("-thumbnail","");
		console.log(lightBoxImage.src);
		lightBox.style.display = "flex";
	})
});

closeBtn.addEventListener("click", ()=>{
	lightBox.style.display = "none";
})

lightBox.addEventListener("click", ()=>{
	lightBox.style.display = "none";
})