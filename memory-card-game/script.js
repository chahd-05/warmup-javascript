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
        name: "lion",
        image: "assets/images/lion.png"
    },
    {
        id: 4,
        name: "elephant",
        image: "assets/images/elephant.png"
    },
    {
        id: 5,
        name: "tiger",
        image: "assets/images/tiger.png"
    },
    {
        id: 6,
        name: "panda",
        image: "assets/images/panda.png"
    }
];
console.log(cards)


const gameBoard = document.querySelector("#game-board")

cards.forEach((cardData) => {
    const card = document.createElement("div")
    card.classList.add("card", "hidden")
    gameBoard.appendChild(card)

    const image = document.createElement("img")

    image.scr = cardData.image
    image.alt = cardData.name
    card.appendChild(image)
})