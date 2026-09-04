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
const gameCards = [...cards, ...cards]
const gameBoard = document.querySelector("#game-board")

gameCards.sort(() => Math.random() - 0.5)
let selectedCards = []

gameCards.forEach((cardData) => {
    const card = document.createElement("div")
    card.classList.add("card", "hidden")
    gameBoard.appendChild(card)

    const image = document.createElement("img")

    image.src = cardData.image
    image.alt = cardData.name
    card.appendChild(image)

    
    card.addEventListener("click", () => {
        if(selectedCards.length >= 2){
            return;
        }

        card.classList.remove("hidden")
        card.classList.add("visible")

        selectedCards.push(card)

        if(selectedCards.length === 2){
            const firstCard = selectedCards[0]
            const secondCard = selectedCards[1]

            if(firstCard.dataset.name === secondCard.dataset.name){
                console.log("match")

                firstCard.classList.add("found")
                secondCard.classList.add("found")
            }else {
                console.log("not a match")
            }
        }
        
        console.log(selectedCards);
        
        card.dataset.name = cardData.name
    })
    console.log(card);
    

    

})



