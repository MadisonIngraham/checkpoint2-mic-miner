let clickUpgrades = {
  fans: {
    price: 25,
    quantity: 0,
    multiplier: 2
  },
  duet: {
    price: 5,
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

let music = 0;
function mine() {
  music += 1;
  document.getElementById("music").innerHTML = ` <h1> ${music} </h1>`;
}

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
    clickUpgrades.fans.quantity++;
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
    clickUpgrades.duet.quantity++;
    clickUpgrades.duet.price += 10;
  }

  document.getElementById("duet-price").innerHTML = `
  <h2> ${clickUpgrades.duet.price}</h2>`;
  document.getElementById("duet-partners").innerHTML = `
  <h2> ${clickUpgrades.duet.quantity}</h2>`;
}
