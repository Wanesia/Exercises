/*EXERCISE: ARRAYS
▪ Create an array with 5 names. Print out the first element (name) using console.log()
▪ Use the indexOf function to get the index of a name that exists in your array.
▪ Try the indexOf function with a name that does not exist. What is returned?
▪ Use the push function to add a new name to the array of names, so you have 6
names in the array. 'log' the array to verify.
▪ Use the slice function on the array, to create a new array with the first 3 names. 'log'
the array to verify.
▪ Create 2 objects with firstname, lastname, email – values. Add the two objects to a
new array. 'log' the array to verify. Also 'log' the first objects' email in a separate
'log'.*/

const names = ["name1", "name2", "name3", "name4", "name5"];

console.log(names[0]);
console.log(names.indexOf("name1"));
console.log(names.indexOf("name12"));

names.push("name6");

const newNames = names.slice(0,3)
console.log(newNames);

const person1 = {
    firstname: "John",
    lastname: "Smith",
    email: "john@example.com"
}
const person2 = {
    firstname: "Michael",
    lastname: "Smith",
    email: "michael@example.com"
}
names.push(person1,person2);
console.log(names);
console.log(person1.email);