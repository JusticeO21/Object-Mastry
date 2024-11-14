import { heroes, villains } from './data.js';

export function startBattle() {
  const battleLog = document.getElementById("battle-log");
  battleLog.innerHTML = "";

  heroes.forEach((hero) => {
    const villain = villains[Math.floor(Math.random() * villains.length)];
    battleLog.innerHTML += `<p>${hero.name} vs. ${villain.name} - ${villain.name} reveals ${hero.name}'s weakness!</p>`;
  });
}
