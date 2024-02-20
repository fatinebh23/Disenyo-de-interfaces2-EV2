document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    function selectImage(selectedImage) {
        images.forEach(image => {
            image.classList.remove("selected");
            if (image !== selectedImage) {
                image.style.opacity = 0.4;
            }
        });

        selectedImage.classList.add("selected");
        selectedImage.style.opacity = 1;
    }

    window.selectImage = selectImage;
});
