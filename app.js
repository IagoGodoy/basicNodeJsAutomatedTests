
/*
This is the base nodeJs script that we are going to use to exemplify
the implementation of automated testing
*/

// Import the operations file containing the functions
const studentsOperations = require('./studentsOperations');

//Check for student and log the output
let studentName="Nikola Tesla"
let result = studentsOperations.checkStudentInClass(studentName)
console.log("Result:")
console.log(result)


