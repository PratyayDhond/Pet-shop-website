// Enable Bootstrap Navbar functionality
var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
  var target = document.querySelector(
    navbarToggler.getAttribute("data-bs-target")
  );
  if (target.classList.contains("show")) {
    target.classList.remove("show");
  } else {
    target.classList.add("show");
  }
});
var buff = document.getElementById("pets");

//for future upgrades, just store the database fetch results in this array to get all the cards
let buff1 = [
  {
    img: "bullDog.jpg",
    name: "Bull Dog",
    height: "14-15 inches",
    weight: " 50 pounds (male), 40 pounds (female)",
    lifeExpectancy: "8-10 years",
    group: " Non-Sporting Group",
    price: "57999/-",
  },
  {
    name: "German Shepherd",
    img: "germanShepard.jpg",
    height: "24-26 inches (male), 22-24 inches(female)",
    weight: " 65-90 pounds (male), 50-70 pounds(female)",
    lifeExpectancy: "7-10 years",
    group: " Herding Group",
    price: "49999/-",
  },
  {
    name: "Golden Retriever",
    img: "golden-retriever.jpg",
    height: "21-22 inches (male), 19-21 inches(female)",
    weight: " 58-63 pounds (male), 55-60 pounds(female)",
    lifeExpectancy: "10-12 years",
    group: " Sporting Group",
    price: "59999/-",
  },
  {
    name: "Beagle",
    img: "beagle.jpeg",
    height: "19-22 inches (male), 17-20 inches(female)",
    weight: " 25-33 pounds (male), 22-25 pounds(female)",
    lifeExpectancy: "12-15 years",
    group: " Hound Group",
    price: "39999/-",
  },
];

buff1.forEach((ele) => {
  const card = document.createElement("div");
  card.className = "col-lg-6";
  card.innerHTML = `   <div class="card my-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="card-header text-center">${ele.name}</div>
              <div class="card-body d-flex justify-content-around">
                <div class="col-5">
                  <img src="${ele.img}" class="img-fluid" alt="${ele.name}" />
                  <div class="my-3 d-flex justify-content-around flex-wrap">
                    <button
                      class="btn btn-primary mb-2"
                      onclick="document.location='404.html'"
                    >
                      Purchase
                    </button>
                    <button
                      class="btn btn-primary mb-2"
                      onclick="document.location='404.html'"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div class="col-6">
                  <p class="card-text">
                    <strong>Height:</strong> ${ele.height}<br />
                    <strong>Weight:</strong>${ele.weight}<br />
                    <strong>Life Expectancy:</strong> ${ele.lifeExpectancy}<br />
                    <strong>Group:</strong>${ele.group}<br />
                    <strong>Price:</strong> ${ele.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
      `;
  // add the card to the container
  buff.appendChild(card);
});
