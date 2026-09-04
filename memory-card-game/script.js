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

// const gameBoard = document.querySelector("#game-board")

// cards.forEach((cardData) => {
//     const card = document.createElement("div")
//     card.classList.add("card", "hidden")
//     gameBoard.appendChild(card)

//     const image = document.createElement("img")

//     image.src = cardData.image
//     image.alt = cardData.name
//     card.appendChild(image)

//     card.addEventListener("click", () => {
//         card.classList.remove("hidden")
//         card.classList.add("visible")
//     })
// })
const number = [1, 2, 3, 4, 5, 6]
number.sort(() => Math.random() - 0.5)
console.log(number);

