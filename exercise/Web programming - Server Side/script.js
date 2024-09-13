/*Create a Cat class with name, color, breed.
▪ Create a constructor that takes 3 parameters to create an object with name, color,
breed.
▪ Create a function/method that returns the cat's data.
▪ Create a function that can change the cat's name.*/

class Cat {
    constructor(name, color, breed){
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getCatData(){
        return `Name: ${this.name} \ncolor: ${this.color} \nbreed: ${this.breed}`;
    }
    changeName(newName){
        this.name = newName;
    }
}

const cat = new Cat("kicia", "black","mixed");

console.log(cat.getCatData());
cat.changeName("cat");
console.log(cat.getCatData());
