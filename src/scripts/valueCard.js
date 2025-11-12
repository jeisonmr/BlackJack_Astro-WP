import { deck } from "./initGame.js";

export const valueCard = (accumulated) => {
    let card = deck.pop();
    console.log(card);
    if (card[0] === 'J' || card[0] === 'Q' || card[0] === 'K') {
        accumulated += 10;
    } else if (card[0] === 'A') {
        accumulated += (accumulated < 21 ? 10 : 1);
    } else if (!isNaN(card[0])) {
        accumulated += parseInt(card);
    }

    return [accumulated, card];
}