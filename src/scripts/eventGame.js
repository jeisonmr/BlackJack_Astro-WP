import { newGame } from './initGame.js';
import { valueCard } from './valueCard.js';

export let mazoPlayer1 = document.getElementById('cartasPlayer1');
export let mazoCrupier = document.getElementById('cartasCrupier');
export let showPointerCrupier = document.getElementById('counterCrupier');
export let showPointerPlayer = document.getElementById('counterPlayer1');
export let pointerPlayer1 = 0;
export let pointerCrupier = 0;

const btnNewGame = document.getElementById('btnNuevoJuego');
const btnPedirCarta = document.getElementById('btnPedirCarta');
const btnPlantarse = document.getElementById('btnPlantarse');

export const winner = document.querySelector('.winner');
export const lose = document.querySelector('.lose');
export const tablas = document.querySelector('.tablas');


export const playerCard = () => {

	const card = valueCard(pointerPlayer1);
	showPointerPlayer.textContent = card[0];
	pointerPlayer1 = card[0];
	console.log(`Player ${card} | ${pointerPlayer1}`);

	const image = document.createElement('img');
	image.src = `assets/cartas/${card[1]}.png`;
	mazoPlayer1.appendChild(image);

	if (pointerPlayer1 > 21) {
		btnPedirCarta.disabled = true;
		btnPlantarse.disabled = true;
		crupierCard(pointerPlayer1);
		return;
	}

}

export const crupierCard = (minPointer) => {
	const card = valueCard(pointerCrupier);
	showPointerCrupier.textContent = card[0];
	pointerCrupier = card[0];
	console.log(`Crupier ${card} | ${pointerCrupier}`);
	const image = document.createElement('img');
	image.src = `assets/cartas/${card[1]}.png`;
	mazoCrupier.appendChild(image);
	
	if (minPointer > 21) {
		console.log('Ganaste Crupier');
		lose.classList.remove('hidden');
		btnPedirCarta.disabled = true;
		btnPlantarse.disabled = true;
		return;
	}
}

export const endGame = () => {
	btnPedirCarta.disabled = true;
	btnPlantarse.disabled = true;
	do {
		crupierCard();
		let message;
		if (pointerCrupier > 21) {
			message = 'Ganaste Player';
			winner.classList.remove('hidden');
		} else if (pointerCrupier > pointerPlayer1) {
			message = 'Ganaste Crupier';
			lose.classList.remove('hidden');
		} else if (pointerCrupier === pointerPlayer1) {
			if(pointerCrupier < 21 ){
				crupierCard();
				pointerCrupier < 21 ? ( 
					message = 'Ganaste Crupier',
					lose.classList.remove('hidden')
				) : ( 
					message = 'Ganaste Player',
					winner.classList.remove('hidden')
				);
			}else{
				message = 'Empate';
				tablas.classList.remove('hidden');
			}
			console.log(message);
		}

		} while (pointerCrupier < pointerPlayer1 && pointerCrupier < 21);

}

export const resetPointer = () => {
	pointerPlayer1 = 0;
	pointerCrupier = 0;
	console.log('Reset');
}

btnNewGame.addEventListener('click', newGame);
btnPedirCarta.addEventListener('click', playerCard);
btnPlantarse.addEventListener('click', endGame);