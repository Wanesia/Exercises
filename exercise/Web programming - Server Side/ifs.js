/*Create a function, findLargest, that takes 4 numbers as 4 parameters and returns
the largest of the 4 numbers.
▪ Create a function that takes 3 numbers as 3 parameters. The first parameter is the
number to check. The 2nd and 3rd parameter is a range (from and to). If the first
parameter is within the range of the range it should return true and false if not.*/

function findLargest(num1, num2, num3, num4) {
    let largest;
    if (num1 > num2){
        largest = num1;
    }
    else{
        largest = num2;
    }
    if (num3 > largest){
        largest = num3;
    }
    if (num4 > largest){
        largest = num4;
    }
    return largest;
}
console.log(findLargest(1, 2, 33, 4));

function isInRange(num1, num2, num3) {
    if (num2 > num3){
        return num1 >= num3 && num1 <= num2;
    }
    else {
        return num1 >= num2 && num1 <= num3;
    }
}

console.log(isInRange(20,26,16));
