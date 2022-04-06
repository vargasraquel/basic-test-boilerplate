function handleResults() {
  document.querySelector(".no-results").classList.add("no-results-hidden");
  document.querySelector(".results").classList.remove("results-hidden");
}

const containerEl = document.querySelector(".container");

let sun = document.getElementById("sun");
sun.addEventListener("change", function () {
  this.value;
  startLoading();
});

let water = document.getElementById("water");
water.addEventListener("change", function () {
  this.value;
  startLoading();
});

let pets = document.getElementById("pets");
pets.addEventListener("change", function () {
  this.value;
  startLoading();
});

function startLoading() {
  if (
    sun.value !== "Select..." &&
    water.value !== "Select..." &&
    pets.value !== "Select..."
  ) {

    let url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun.value}&water=${water.value}&pets=${pets.value}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => initialize(json));

    function initialize(data) {
      data.forEach((item) => {
        let waterImage = `/assets/icons/water/${item.water}.svg`;
        let sunImage = `/assets/icons/sun/${item.sun}.svg`;
        let petsImage = `/assets/icons/pet/${item.toxicity}.svg`;

        containerEl.insertAdjacentHTML(
          "afterbegin",
          `<div class="card">
          <div class="card-image">
            <img
              src="${item.url}"
              alt="${item.name}"
            />
          </div>
          <div class="card-info">
            <div class="card-description">
              <h2>${item.name}</h2>
              <h4>$${item.price}</h4>
            </div>
            <div class="card-filter">
              <img src="${petsImage}" alt="Toxic icon" />
              <img src="${sunImage}" alt="Sun icon" />
              <img src="${waterImage}" alt="Water icon" />
            </div>
          </div>
        </div>`
        );
        handleResults();
      });
    }
  }
}
