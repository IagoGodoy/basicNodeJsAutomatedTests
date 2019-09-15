/*
This is the functions file that specifies the operations that we can execute 
with the student's data
*/

const classList = [{
    name:"Albert Einstein",
    dateOfBirth:"14/03/1879"
},
{
    name:"Nikola Tesla",
    dateOfBirth:"10/07/1856"
},
{
    name:"Thomas Edison",
    dateOfBirth:"11/02/1847"
}];


/* This a basic function that receives a string 
representing a student's name, and checks if that student is enrolled 
into the class list, here represented by the array of json objects above, which
contain the student's name and dateOfBirth , both as strings, if the student 
is not enrolled the function returns null*/

function checkStudentInClass(studentName){
    if(!studentName) throw new Error('Invalid name')
    for (const studentIndex in classList) {
        let currentStudent = classList[studentIndex];
        if (currentStudent.name===studentName){
            return currentStudent;
        }
    }
    return null;
}

//Then we export our function so we can call if from the main file
module.exports={
    checkStudentInClass
}