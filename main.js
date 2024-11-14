import { heroes } from './src/data.js';
import { startBattle } from './src/simulator.js';

const heroDetails = document.getElementById("hero-details");
const usePowerButton = document.getElementById("use-power");
const revealIdentityButton = document.getElementById("reveal-identity");
const startBattleButton = document.getElementById("start-battle");

// Display details of the first hero for simplicity
let currentHero = heroes[Math.floor(Math.random() * heroes.length)];
heroDetails.innerHTML = `<p class="name">${currentHero.name}</p> <p>Powers: ${currentHero.powers.join(", ")}</p>`;


// Event listeners for hero actions
revealIdentityButton.addEventListener("click", () => {
  currentHero.revealIdentity();
});

usePowerButton.addEventListener("click", () => {
  const randomPower = currentHero.powers[Math.floor(Math.random() * currentHero.powers.length)];
  currentHero.usePower(randomPower);
});

// Event listener for the battle simulator
startBattleButton.addEventListener("click", startBattle);
