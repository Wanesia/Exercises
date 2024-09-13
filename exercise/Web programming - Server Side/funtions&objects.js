/*EXERCISES: FUNCTIONS & OBJECTS
▪ Create a javascript function that takes firstname and lastname as 2 parameters and
uses console.log() to output the person's name. Check that it works and is printet
correctly.
▪ Create a function that calculates the area of a rectangle. The function should return
the result. Test that it works.
▪ Create a function that takes speed and time as 2 parameters and calculates and
returns the distance. Use the function to test that it works by using the 'log' again.
Print out "You have travelled *x* km" where *x* is replaced by the result from the
function.
▪ Create an object called calculator with the name of the owner (eg. Your name) and
modify your code so the 3 previous functions are attached to the object.
▪ Adjust your code so that you can call the functions and test that they still work.*/

function function1(firstName, lastName) {
    console.log(firstName + " " + lastName);
    
};

function1("John", "Smith");

function rectangleArea(a, b){
    return a*b;
}

console.log(rectangleArea(9,2));

function travelledDistance(v, t){
    distance = v*t;
    console.log(`You have travelled ${distance} km`);
    return distance;
}

const calculator = {
    ownerName: "Wan",
    function1: function1,
    rectangleArea: rectangleArea,
    travelledDistance: travelledDistance,

};

calculator.function1("simonaaaaa", "w")
console.log(calculator.rectangleArea(1.1,2));
calculator.travelledDistance(11,12)