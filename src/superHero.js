import { showNotification } from './notification.js'

const superHero = {
    name: "SuperHeroName",
    secreteIdentity: "SuperHeroidenetity",
    powers: [],
    weaknesses: "Hero weekness",
    useSuperpower: function () {
        console.log(`Using ${this.powers[0]}`);
    },
    revealIdentity: function () { 
        console.log(`Revealing identity: ${this.name} - ${this.secreteIdentity}`);
    }
}

export function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

Superhero.prototype.usePower = function (powerName) {
  if (this.powers.includes(powerName)) {
      console.log(`${this.name} uses ${powerName}!`);
      showNotification(`${this.name} uses ${powerName}!`);
  } else {
      console.log(`${this.name} does not have the power: ${powerName}`);
      showNotification(`${this.name} does not have the power: ${powerName}`);
  }
};

Superhero.prototype.revealIdentity = function () {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
    showNotification(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

// Adding a Supervillain through prototypal inheritance
export function Supervillain(name, secretIdentity, powers, weakness) {
  Superhero.call(this, name, secretIdentity, powers, weakness);
}
Supervillain.prototype = Object.create(Superhero.prototype); 
Supervillain.prototype.constructor = Supervillain;

Supervillain.prototype.tauntHero = function (hero) {
  console.log(`${this.name} taunts ${hero.name}, revealing their weakness: ${hero.weakness}!`);
};

