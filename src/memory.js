class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    
    // add the rest of the class properties here
    this.pickedCards = [];//already clicked cards
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    //this.shuffleCards()
  }

  shuffleCards() {
    // ... write your code here
    
    if(!this.cards){
      return undefined;
    } 
    
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    
    return this.cards;
  }
    //return and check
    


  }

  checkIfPair(card1, card2) {
    // ... write your code here
    //check if 2 picked cards are the same
    if (card1 === card2){
      this.pairsGuessed ++;
      this.pairsClicked ++;
      return true;
    }
    else {
      this.pairsClicked ++;
      return false;
    }
    
  }

  checkIfFinished() {
    // ... write your code here

    
    if(this.pairsGuessed < 12){
      return false;
    } else if(this.pairsGuessed >= 12) { //////Doesnt work
      return true;
    } 
  }
}
