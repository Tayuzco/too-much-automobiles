const searchInput = document.getElementById("carSearch");
const carCards = document.querySelectorAll(".car-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    carCards.forEach(function (card) {

        const carName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (carName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


function showCarDetails(
    name,
    year,
    condition,
    transmission,
    fuel,
    location,
    price,
    description,
    mainImage
) {

    document.getElementById("modalCarName").textContent = name;

    document.getElementById("modalCarYear").textContent =
        "Year: " + year;

    document.getElementById("modalCarCondition").textContent =
        "Condition: " + condition;

    document.getElementById("modalCarTransmission").textContent =
        "Transmission: " + transmission;

    document.getElementById("modalCarFuel").textContent =
        "Fuel: " + fuel;

    document.getElementById("modalCarLocation").textContent =
        "Location: " + location;

    document.getElementById("modalCarPrice").textContent =
        "Price: " + price;

    document.getElementById("modalCarDescription").textContent =
        description;


    /* Main vehicle image */

    document.getElementById("modalMainImage").src = mainImage;


    /* Create the correct gallery for this vehicle */

    const gallery = document.getElementById("galleryThumbnails");

    gallery.innerHTML = "";


    const folder =
        mainImage.substring(
            0,
            mainImage.lastIndexOf("/") + 1
        );


    const photos = [
        "front.jpeg",
        "side.jpeg",
        "interior.jpeg",
        "dashboard.jpeg",
        "rear.jpeg"
    ];


    photos.forEach(function(photo) {

        const image = document.createElement("img");

        image.src = folder + photo;

        image.alt = name;

        image.onclick = function() {
            changeMainImage(this.src);
        };

        gallery.appendChild(image);

    });


    /* WhatsApp */

    const message =
        "Hello TOO MUCH AUTOMOBILES, I am interested in the " + name;

    document.getElementById("modalWhatsApp").href =
        "https://wa.me/2348123261878?text=" +
        encodeURIComponent(message);


    /* Open popup */

    document.getElementById("carModal").style.display = "flex";

}


function changeMainImage(imageSource) {

    document.getElementById("modalMainImage").src =
        imageSource;

}


function closeCarDetails() {

    document.getElementById("carModal").style.display = "none";

}