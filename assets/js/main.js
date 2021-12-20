function handleResults() {
  document.querySelector(".no-results").classList.add("no-results-hidden");
  document.querySelector(".results").classList.remove("results-hidden");
}

const containerEl = document.querySelector(".container");

let sunAmount = document.getElementById("sun");
sunAmount.addEventListener("change", function () {
  this.value;
  startLoading();
});
let waterAmount = document.getElementById("water");
waterAmount.addEventListener("change", function () {
  this.value;
  startLoading();
});
let petsAnswer = document.getElementById("pets");
petsAnswer.addEventListener("change", function () {
  this.value;
  startLoading();
});

function startLoading() {
  if (
    sunAmount.value !== "Select..." &&
    waterAmount.value !== "Select..." &&
    petsAnswer.value !== "Select..."
  ) {
    sun = sunAmount.value;
    water = waterAmount.value;
    pets = petsAnswer.value;

    let url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`;

    fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        const data = myJson;
        data.forEach((item) => {
          let sunImage;
          let waterImage;
          let petsImage;

          switch (item.sun) {
            case "high":
              sunImage =
                "https://gist.githubusercontent.com/vargasraquel/9759abb537137ed1bb933770c419284b/raw/2624d43172a6b6673aa47ae1910381b3168a05d8/high.svg";
              break;
            case "low":
              sunImage =
                "https://gist.githubusercontent.com/vargasraquel/9759abb537137ed1bb933770c419284b/raw/6782244316154f12ca636220d4f5665be99a13e3/low.svg";
              break;
            case "no":
              sunImage =
                "https://gist.githubusercontent.com/vargasraquel/6e1f3c0ae5dd9ff8f2e61f5da8c00b3d/raw/4c321969a0cd3f26fde1e6fbec6293e6ce82850d/gistfile1.svg";
              break;
            default:
              break;
          }
          switch (item.water) {
            case "daily":
              waterImage =
                "https://gist.githubusercontent.com/vargasraquel/e33de460964ecbe523e6726b6a5f4be1/raw/c8c27c13ff3e0803224feba545316473ca1ff5ed/daily.svg";
              break;
            case "regularly":
              waterImage =
                "https://gist.githubusercontent.com/vargasraquel/e33de460964ecbe523e6726b6a5f4be1/raw/c8c27c13ff3e0803224feba545316473ca1ff5ed/regularly.svg";
              break;
            case "rarely":
              waterImage =
                "https://gist.githubusercontent.com/vargasraquel/e33de460964ecbe523e6726b6a5f4be1/raw/c8c27c13ff3e0803224feba545316473ca1ff5ed/rarely.svg";
              break;
            default:
              break;
          }
          switch (item.toxicity) {
            case true:
              petsImage =
                "https://gist.githubusercontent.com/vargasraquel/1811cfb75a8c3abef6d20a96b6d5db9a/raw/484149e1df71f6c7d4badbb6955c1720e586621d/true.svg";
              break;
            case false:
              petsImage =
                "https://gist.githubusercontent.com/vargasraquel/1811cfb75a8c3abef6d20a96b6d5db9a/raw/484149e1df71f6c7d4badbb6955c1720e586621d/false.svg";
              break;
            default:
              break;
          }

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
      });
  }
}
