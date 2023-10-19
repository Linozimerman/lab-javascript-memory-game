const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
    
      // TODO: write some code here
      //Seen in class:
      const clickedScore = document.querySelector("#pairs-clicked")
      const guessedScore = document.querySelector("#pairs-guessed")

      card.classList.toggle("turned")
      memoryGame.pickedCards.push(card)
      if(memoryGame.pickedCards.length === 2){
        const firstCard = memoryGame.pickedCards[0];
        const secondCard = memoryGame.pickedCards[1];
        //div elements are always different, so its useless to compare them
        //so we get the name of each card name to compare.
        const firstCardName = firstCard.getAttribute("data-card-name")
        const secondCardName = secondCard.getAttribute("data-card-name")
        
        //then i call the method we already did. and make a variable for it.
        const areTheyPairs = memoryGame.checkIfPair(firstCardName, secondCardName)
        //then check if they are pairs or not
        if(areTheyPairs){ //buscar en el html con la variable creada arriba  "#pairs-clicked"
          
        } else{   //si no son pares le damos 2 segundos para darse vuelta
          setTimeout(()=>{
            firstCard.classList.toggle("turned");
            secondCard.classList.toggle("turned");
          }, 2000)
        }
        memoryGame.pickedCards = []
        clickedScore.innerText = `${memoryGame.pairsClicked}`
        guessedScore.innerText = `${memoryGame.pairsGuessed}`      
        
        if (!memoryGame.checkIfFinished){
          alert("YOU WON!") //Its not working properly, i think because the method has a bug
        }
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
