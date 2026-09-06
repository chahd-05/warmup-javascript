const cards = [
    {
        id: 1,
        name: "cat",
        image: "assets/images/cat.png"
    },
    {
        id: 2,
        name: "dog",
        image: "assets/images/dog.png"
    },
    {
        id: 3,
        name: "dolphin",
        image: "assets/images/dolphin.png"
    },
    {
        id: 4,
        name: "elephant",
        image: "assets/images/elephant.png"
    },
    {
        id: 5,
        name: "panda",
        image: "assets/images/panda.png"
    },
    {
        id: 6,
        name: "bee",
        image: "assets/images/bee.png"
    }
];

const gameCards = [...cards, ...cards];

const gameBoard = document.querySelector("#game-board");
const victoryMessage = document.querySelector("#victory-message");
const pairsDisplay = document.querySelector("#pairs");
const restartButton = document.querySelector("#restart-button");
const movesDisplay = document.querySelector("#moves")

let selectedCards = [];
let foundPairs = 0;
let moves = 0


function createCards() {

    gameCards.forEach((cardData) => {

        const card = document.createElement("div");

        card.classList.add("card", "hidden");

        gameBoard.appendChild(card);


        const image = document.createElement("img");

        image.src = cardData.image;
        image.alt = cardData.name;

        card.appendChild(image);


        card.dataset.name = cardData.name;


        card.addEventListener("click", () => {

            if (card.classList.contains("visible")) {
                return;
            }

            if (selectedCards.length >= 2) {
                return;
            }

            if (selectedCards.includes(card)) {
                return;
            }


            card.classList.remove("hidden");
            card.classList.add("visible");

            selectedCards.push(card);


            if (selectedCards.length === 2) {

                moves++
                movesDisplay.textContent = moves

                const firstCard = selectedCards[0];
                const secondCard = selectedCards[1];


                if (firstCard.dataset.name === secondCard.dataset.name) {

                    console.log("match");

                    firstCard.classList.add("found");
                    secondCard.classList.add("found");

                    foundPairs++;

                    pairsDisplay.textContent = `${foundPairs} / ${cards.length}`;


                    if (foundPairs === cards.length) {

                        victoryMessage.classList.remove("hidden");

                    }


                    selectedCards = [];

                } else {

                    console.log("not a match");

                    setTimeout(() => {

                        firstCard.classList.remove("visible");
                        firstCard.classList.add("hidden");

                        secondCard.classList.remove("visible");
                        secondCard.classList.add("hidden");

                        selectedCards = [];

                    }, 1000);

                }
            }

        });

    });

}


gameCards.sort(() => Math.random() - 0.5);


createCards();

restartButton.addEventListener("click", () => {

    moves = 0
    movesDisplay.textContent = "0"

    foundPairs = 0;

    pairsDisplay.textContent = `0 / ${cards.length}`;

    selectedCards = [];

    victoryMessage.classList.add("hidden");

    gameBoard.innerHTML = ""

    gameCards.sort(() => Math.random() - 0.5)


    const allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {

        card.classList.remove("visible");
        card.classList.remove("found");

        card.classList.add("hidden");

    });

createCards()
    console.log("restart");

});