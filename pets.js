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
                      class="btn btn-primary mb-2 add-to-cart"
id="liveToastBtn"
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
let cart = [
  {
    img: "bullDog.jpg",
    name: "Bull Dog",
    height: "14-15 inches",
    weight: " 50 pounds (male), 40 pounds (female)",
    lifeExpectancy: "8-10 years",
    group: " Non-Sporting Group",
    price: "57999/-",
  },
];

let c = document.getElementById("item-count");
c.textContent = cart.length;
// Select all elements with class "add-to-cart"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Array to store cart items

// Function to handle "Add To Cart" button click
function addToCartClicked(event) {
  // Get the clicked item's index from the data-index attribute
  const itemIndex = event.target.dataset.index;

  // Add the clicked item to the cart array
  cart.push(buff1[itemIndex]);

  // Update the cart count
  updateCartCount();

  // Optional: Provide user feedback that the item has been added to the cart
  // alert(`${buff1[itemIndex].name} has been added to your cart!`);
}

// Function to update the cart count
function updateCartCount() {
  let c = document.getElementById("item-count");
  c.textContent = cart.length;
}

// Add click event listener to each "Add To Cart" button
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    // Call addToCartClicked function when button is clicked
    addToCartClicked(event);

    // Prevent the default behavior of the button click
    event.preventDefault();
  });

  // Add data-index attribute to store the index of the corresponding product
  button.dataset.index = index;
});
let m = document.getElementById("cart-modal");
cart.forEach((ele) => {
  const card1 = document.createElement("div");
  card1.className = "card mb-3";
  card1.innerHTML = `   <img src="${ele.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ele.name}</h5>
    <p class="card-text"><strong>Group:</strong>${ele.group}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
      `;
  // add the card to the container
  m.appendChild(card1);
});

//toast
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
