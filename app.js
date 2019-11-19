let clickUpgrades = {
  fans: {
    price: 5,
    quantity: 0,
    multiplier: 2
  },
  duet: {
    price: 50,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  goldMic: {
    price: 300,
    quantity: 0,
    multiplier: 10
  },
  ladyGaga: {
    price: 500,
    quantity: 0,
    multiplier: 25
  }
};

function fanPrice() {
  document.getElementById("fan-price").innerHTML = `
<h2> ${clickUpgrades.fans.price}</h2>`;
}

fanPrice();

function fanQuantity() {
  document.getElementById("fan-quantity").innerHTML = `
  <h2> ${clickUpgrades.fans.quantity}</h2>`;
}

fanQuantity();

function buyFans() {
  if (music >= clickUpgrades.fans.price) {
    clickUpgrades.fans.quantity += 1;
    clickUpgrades.fans.price += 5;
  }

  document.getElementById("fan-price").innerHTML = `
  <h2> ${clickUpgrades.fans.price}</h2>`;
  document.getElementById("fan-quantity").innerHTML = `
  <h2> ${clickUpgrades.fans.quantity}</h2>`;
}

function duetPrice() {
  document.getElementById("duet-price").innerHTML = `
<h2> ${clickUpgrades.duet.price}</h2>`;
}

duetPrice();

function duetPartners() {
  document.getElementById("duet-partners").innerHTML = `
  <h2> ${clickUpgrades.duet.quantity}</h2>`;
}

duetPartners();

function buyDuets() {
  if (music >= clickUpgrades.duet.price) {
    clickUpgrades.duet.quantity += 1;
    clickUpgrades.duet.price += 10;
  }

  document.getElementById("duet-price").innerHTML = `
  <h2> ${clickUpgrades.duet.price}</h2>`;
  document.getElementById("duet-partners").innerHTML = `
  <h2> ${clickUpgrades.duet.quantity}</h2>`;
}

let music = 0;
function mine() {
  music = music += 1;
  document.getElementById("music").innerHTML = ` <h1> ${music} </h1>`;
}

const x = document.getElementById("fan-button");

x.addEventListener("click", fanMultipler);

function fanMultipler() {
  music += clickUpgrades.fans.quantity * clickUpgrades.fans.multiplier;
  document.getElementById("music").innerHTML = ` <h1> ${music} </h1>`;
}
