const hambuger = document.querySelector('.hambuger');
const mobile = document.querySelector('.mobile');


hambuger.addEventListener('click', function () {
	this.classList.toggle('is-active');
	mobile.classList.toggle('is-active');
});


const image_input = document.querySelector("#image_input");
image_input.addEventListener("change", function() {
   const reader = new FileReader();
   reader.addEventListener("load", () => {
     const uploaded_image = reader.result;
     document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
});
   reader.readAsDataURL(this.files[0]);
});
