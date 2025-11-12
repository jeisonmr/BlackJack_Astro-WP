import { resetPointer, winner, lose, tablas } from "./eventGame.js";

let cards = [];
const simbolCards = ['H', 'D', 'C', 'S'];
const especialCards = ['J', 'Q', 'K', 'A'];

export const loadDeck = () => {
  cards = [];
  // Deck 2 - 10
  for (let i = 2; i <= 10; i++) {
    for (let j = 0; j < simbolCards.length; j++) {
      cards.push(`${i}${simbolCards[j]}`)
    }
  }

  // Deck A J Q K
  for (let i = 0; i < especialCards.length; i++) {
    for (let j = 0; j < simbolCards.length; j++) {
      cards.push(`${especialCards[i]}${simbolCards[j]}`);
    }
  }
  
  let deck = _.shuffle(cards);
  return deck;
}

export const newGame = () => {
  document.getElementById('counterCrupier').textContent = 0
  document.getElementById('counterPlayer1').textContent = 0
  document.getElementById('cartasPlayer1').innerHTML = '';
  document.getElementById('cartasCrupier').innerHTML = '';
  deck = loadDeck();
  resetPointer();
  btnPedirCarta.disabled = false;
  btnPlantarse.disabled = false;
  winner.classList.add('hidden');
  lose.classList.add('hidden');
  tablas.classList.add('hidden');
}

export let deck = loadDeck();
console.log('New Deck', deck);