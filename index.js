// index.js - Main Game Initialization and Logic

// Import necessary modules (e.g., for sound handling)
const SoundPlayer = require('./src/SoundPlayer');
const GameEngine = require('./src/GameEngine');

// Initialize Game
const game = new GameEngine();
game.init();

// Load sounds and characters
const sounds = [
  'beat1.wav',
  'melody1.wav',
  'effect1.wav',
];
const characters = [
  { name: 'Baby Oren', sound: 'beat1.wav' },
  { name: 'Baby Garnold', sound: 'melody1.wav' },
  { name: 'Baby Sky', sound: 'effect1.wav' },
];

// Assign sounds to characters
characters.forEach((character) => {
  SoundPlayer.loadSound(character.sound);
  game.addCharacter(character);
});

// Event listener for starting the game
document.getElementById('start-button').addEventListener('click', () => {
  game.start();
});

// Function to handle character clicks for sound playback
document.getElementById('game-area').addEventListener('click', (event) => {
  const characterName = event.target.dataset.name;
  game.playSoundForCharacter(characterName);
});

console.log('Sprunki Babies game initialized.');
