/* Exercise: Student Grades Management
▪ Create a Student Object:
▪ Define a Student object with properties: name, id, and grades (an array of numbers).
▪ Add Grades:
▪ Write a function named addGrade that takes a Student object and a grade (number) as
parameters, and adds the grade to the student's grades array.
▪ Update Student Name:
▪ Write a function named updateStudentName that takes a Student object and a new name as
parameters and updates the student's name.
▪ Test the Functions:
▪ Create a student object.
▪ Add a few grades to the student.
▪ Update the student's name and print the updated object.*/

const student = {
    name: "student",
    id: 1,
    grades: [1,2,5]
}
function addGrades(student, grade) {
    student.grades.push(grade);
}
addGrades(student,1);
console.log(student.grades);

function updateStudentName(student, newName) {
    student.name = newName;
}
updateStudentName(student,"newName");
console.log(student.name);

console.log(student);