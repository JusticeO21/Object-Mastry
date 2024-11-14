import { Superhero, Supervillain } from './superHero.js';

export const heroes = [
  new Superhero("Captain Code", "Alice Smith", ["coding", "debugging", "refactoring"], "bugs"),
  new Superhero("Design Dynamo", "Bob Brown", ["design", "CSS mastery", "animations"], "overwhelm"),
];

export const villains = [
  new Supervillain("Bug Beast", "Charlie Chaos", ["corruption", "malware"], "virus scanners"),
];
