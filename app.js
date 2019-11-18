let music = 0;
function mine() {
  music += 1;
  document.getElementById("music").innerHTML = ` <h1> ${music} </h1>`;
}

let clickUpgrades = {
  fans: {
    price: 75,
    quantity: 0,
    multiplier: 2
  },
  duet: {
    price: 150,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  silverMic: {
    price: 300,
    quantity: 0,
    multiplier: 10
  },
  goldMic: {
    price: 500,
    quantity: 0,
    multiplier: 20
  }
};

function buyFans() {
  if (music >= 75) {
  }
}
