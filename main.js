console.log("What's up");

const pets = [
    {
      imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\calico kitten.jpg",
       name: "Cheetah",
      color: "Calico",
      specialSkill: "Meows for food and climbs trees",
      type: "Cat",
    },

    {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\purple dino.jpg",
        name: "Roxie",
        color: "Tan",
        specialSkill: "Catches tail and wraps herself arounds bushes",
        type: "Dog",
      },

      {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\white kitty.jpg",
         name: "Tundra",
        color: "White",
        specialSkill: "Climbs on your back and holds meetings for catnip addiction",
        type: "Cat",
      },
      {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\fancy dino.jpg",
         name: "Tiny",
        color: "Green",
        specialSkill: "Reformed Vegetarian who enjoys a juicy burger",
        type: "Dino",
      },
      {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\green dino.jpg",
        name: "Sweet Pea",
        color: "Green",
        specialSkill: "Plays soccer and bakes cookies",
        type: "Dino",
      },
      {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\magic kitty.jpg",
        name: "Fluffy",
        color: "Black",
        specialSkill: "It's magical and likes catnip.",
        type: "Cat",
      },
      {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\lassie.jpg",
        name: "Lassie",
        color: "Multiple",
        specialSkill: "Finds Timmy down the well",
        type: "Dog",
      },
      {
        imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\purple dino.jpg",
        name: "Dougie",
        color: "Purple",
        specialSkill: "Sings love songs in the shower",
        type: "Dino",
      },

{
      imageUrl:"C:\Users\ydall\workspace\foundations\exercises\pet-adoption2\pics\pink dog.jpg",
      name: "Rover",
      color: "Pink",
      specialSkill: "Plays guitar and wears a mohawk",
      type: "Dog",
    }
];


console.log(pets);



const petCards = () => {

let domString='';
for(let i = 0; i <pets.length; i++){
   domString += `<div class="pets">`;
   domString += `<h1>${pets[i].name}</h1>`;
   domString += `<img class = "img" src="${pets[i].imageURL}">`;
   domString += `<h3><br>${pets[i].color}</h3>`;
   domString += `<h3>${pets[i].specialSkill}</h3>`;
   domString += `<button>${pets[i].type}</button>`;
   domString +=`</div>`;
}
    const printToDom = (divId,textToPrint) => {
     const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    }
    printToDom('mypets',domString );
};

petCards();
