const images = [
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
        alt: "Mountain landscape at sunrise",
        title: "Mountain Morning"
    },

    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        alt: "Ocean and beach",
        title: "Ocean Escape"
    },

    {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
        alt: "City skyline",
        title: "City Lights"
    },

    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
        alt: "Green forest",
        title: "Forest Trail"
    },

    {
        src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=85",
        alt: "Desert landscape",
        title: "Desert Sunset"
    },

    {
        src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=85",
        alt: "Peaceful lake",
        title: "Peaceful Lake"
    }
];


const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const imageButtons =
    document.querySelectorAll(".image-button");


let currentIndex = 0;


function showImage(index) {

    currentIndex =
        (index + images.length) % images.length;

    lightboxImage.src =
        images[currentIndex].src;

    lightboxImage.alt =
        images[currentIndex].alt;

    caption.textContent =
        images[currentIndex].title;

    counter.textContent =
        `${currentIndex + 1} / ${images.length}`;

    lightbox.classList.add("show");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeLightbox() {

    lightbox.classList.remove("show");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


function nextImage() {
    showImage(currentIndex + 1);
}


function previousImage() {
    showImage(currentIndex - 1);
}


imageButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const index =
                Number(button.dataset.index);

            showImage(index);
        }
    );

});


closeBtn.addEventListener(
    "click",
    closeLightbox
);


nextBtn.addEventListener(
    "click",
    nextImage
);


prevBtn.addEventListener(
    "click",
    previousImage
);


lightbox.addEventListener(
    "click",
    function(event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (!lightbox.classList.contains("show")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        else if (event.key === "ArrowRight") {
            nextImage();
        }

        else if (event.key === "ArrowLeft") {
            previousImage();
        }

    }
);
