console.log("What's up");

const pets = [
    {
      imageUrl:"./pics/calico kitten.jpg",
      name: "Cheetah",
      color: "Pet color: Calico",
      specialSkill: "Meows for food and climbs trees",
      type: "Cat",
    },

    {
        imageUrl:"./pics/roxie.jpg",
        name: "Roxie",
        color: "Petcolor: Tan",
        specialSkill: "Catches tail and wraps herself arounds bushes",
        type: "Dog",
      },

      {
        imageUrl:"./pics/white kitty.jpg",
         name: "Tundra",
        color: "Pet color: White",
        specialSkill: "Climbs on your back and holds meetings for catnip addiction",
        type: "Cat",
      },
      {
        imageUrl:"./pics/fancy dino.jpg",
         name: "Tiny",
        color: "Pet color: Green",
        specialSkill: "Reformed Vegetarian who enjoys a juicy burger",
        type: "Dino",
      },
      {
        imageUrl:"./pics/green dino.jpg",
        name: "Sweet Pea",
        color: "Pet color: Green",
        specialSkill: "Plays soccer and bakes cookies",
        type: "Dino",
      },
      {
        imageUrl:"./pics/magic kitty.jpg",
        name: "Fluffy",
        color: "Pet color: Black",
        specialSkill: "It's magical and likes catnip.",
        type: "Cat",
      },
      {
        imageUrl:"./pics/lassie.jpg",
        name: "Lassie",
        color: "Pet color: Multiple",
        specialSkill: "Finds Timmy down the well",
        type: "Dog",
      },
      {
        imageUrl:"./pics/purple dino.jpg",
        name: "Dougie",
        color: "Pet color: Purple",
        specialSkill: "Sings love songs in the shower",
        type: "Dino",
      },

{
      imageUrl:"./pics/pink dog.jpg",
      name: "Rover",
      color: "Pet color: Pink",
      specialSkill: "Plays guitar and wears a mohawk",
      type: "Dog",
    }
];


// console.log(pets);

const printToDom = (divId,textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const displayCard = (event) => {
  let domString = "";

  for(let i = 0; i <pets.length; i++){
    if (pets[i].type === event.target.id) {
      
      domString += `<div class ="card">`;
      domString += `<div class="adoption">`;
      domString += `<h1>${pets[i].name}</h1>`;
      domString += `<img class="img" src="${pets[i].imageUrl}">`;
      domString += `<h3><br>${pets[i].color}</h3>`;
      domString += `<h3>${pets[i].specialSkill}</h3>`;
      domString += `<button>${pets[i].type}</button>`;
      domString +=`</div>`;
      domString += `</div>`;
    }
  }
  printToDom('mypets',domString );  
};




const petCards = () => {
  
  
  
  let domString='';
  
  for(let i = 0; i <pets.length; i++){
    domString += `<div class ="card">`;
    domString += `<div class="adoption">`;
    domString += `<h1>${pets[i].name}</h1>`;
    domString += `<img class="img" src="${pets[i].imageUrl}">`;
    domString += `<h3><br>${pets[i].color}</h3>`;
    domString += `<h3>${pets[i].specialSkill}</h3>`;
    domString += `<button>${pets[i].type}</button>`;
    domString +=`</div>`;
    domString += `</div>`;
  }
  
  printToDom('mypets',domString );
  
};

document.getElementById("Cat").addEventListener("click", displayCard);
document.getElementById("Dog").addEventListener("click", displayCard);
document.getElementById("Dino").addEventListener("click", displayCard);
document.getElementById("All").addEventListener("click", petCards);

petCards();
