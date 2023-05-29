/* Playing Cards Draw Order – Part 2

Description:

    This is Part 2 of this series of two katas — Part 1 is here.
    If you like playing cards, have also a look at Hide a message in a deck of playing cards and Card-Chameleon, a Cipher with Playing cards.

In Part 1 of this series, we were given a deck and we had to return the order of the cards once drawn using a particular procedure.

Here, we will do the opposite: we will be given the drawn cards, and we'll have to return the deck that would produce this result if drawn using the procedure.

The procedure isn't explained here again, please read it on Part 1.

Your task

Write a function accepting a list of cards as argument, and returning the deck that would produce this list of cards if drawn using the procedure.

export const prepareDeck = (result: string[]): string[] => {

Cards are represented in the same way than in Part 1; the same preloaded function is available to print cards on the console.
Example

const result = ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"];

prepareDeck(deck);

should return:

["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];

Have fun!
*/

// import { printDeck } from "./preloaded";

export const prepareDeck = (drawnCards: string[]): string[] => {
  // printDeck(drawnCards, true); // Using unicode characters
  // printDeck(drawnCards, false); // Using regular characters

  const deck: string[] = []
  while (drawnCards.length > 0) {
    const bottomOfDeck = deck.pop()
    if (bottomOfDeck) deck.unshift(bottomOfDeck)
    const bottomOfDrawnCards = drawnCards.pop()
    if (bottomOfDrawnCards) deck.unshift(bottomOfDrawnCards)
  }
  return deck
}

const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]
const drawn = ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"]
console.log(prepareDeck(drawn)) //should equal deck
