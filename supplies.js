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
var buff = document.getElementById("loop");

//for future upgrades, just store the database fetch results in this array to get all the cards
let buff1 = [
  {
    text: "Some quick example text to build on the card title and make u the bulk of the card's content.",
    link: "https://www.amazon.in/Pedigree-Expert-Nutrition-Months-Onwards/dp/B077ND9486/ref=lp_22743259031_1_5",
    img: "dog.jpg",
  },
  {
    text: "Some quick example text to build on the card title and make u the bulk of the card's content.",
    link: "https://www.amazon.in/Drools-Adult-Chicken-Chunks-Pouches/dp/B0895LGTBJ/ref=lp_22743259031_1_2",
    img: "dogthree.jpg",
  },
  {
    text: "Some quick example text to build on the card title and make u the bulk of the card's content.",
    link: "https://www.amazon.in/Pedigree-Expert-Nutrition-Months-Onwards/dp/B077ND9486/ref=lp_22743259031_1_5",
    img: "dogtwo.jpg",
  },
  {
    text: "Some quick example text to build on the card title and make u the bulk of the card's content.",
    link: "https://www.amazon.in/Pedigree-Expert-Nutrition-Months-Onwards/dp/B077ND9486/ref=lp_22743259031_1_5",
    img: "supplies.jpg",
  },
];

buff1.forEach((ele) => {
  const card = document.createElement("div");
  card.className = "col-lg-6 mt-3 mt-lg-0";
  card.innerHTML = `  <div class="card">
            <img src=${ele.img} class="card-img-top img-fluid." alt="..." />
            <div class="card-body">
              <p class="card-text">
               ${ele.text}
              </p>
              <a
                href=${ele.link}
              >
                <button class="btn btn-primary">Shop Now!</button>
              </a>
            </div>
          </div>
      `;
  // add the card to the container
  buff.appendChild(card);
});
