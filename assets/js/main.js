function handleResults(){
  document.querySelector(".no-results").classList.add("no-results-hidden");
  document.querySelector(".results").classList.remove("results-hidden");
}

const containerEl = document.querySelector(".container")

let sunAmount = document.getElementById("sun");
sunAmount.addEventListener("change", function () {
  this.value;
});
let waterAmount = document.getElementById("water");
waterAmount.addEventListener("change", function () {
  this.value;
});
let petsAnswer = document.getElementById("pets");
petsAnswer.addEventListener("change", function () {
  sun = sunAmount.value;
  water = waterAmount.value;
  pets = this.value;

  let url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`;

  fetch(url)
  .then((response) => response.json())
  .then((myJson) => {
      const data = myJson
      data.forEach((item) => {
        containerEl.insertAdjacentHTML('afterbegin', `<div class="card">
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
              <img src="../../../assets/images/icons/${item.toxicity}.svg" alt="Toxic icon" />
              <img src="../../../assets/images/icons/${item.sun}.svg" alt="Sun icon" />
              <img src="../../../assets/images/icons/${item.water}.svg" alt="Water icon" />
            </div>
          </div>
        </div>`)
        handleResults()
      })})
    })