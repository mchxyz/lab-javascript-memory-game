class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0; // add the rest of the class properties here
  }

  shuffleCards(cards) {
    if (!this.cards) {
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let random = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }
    this.pairsClicked++;

    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}