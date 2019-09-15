const assert = require('chai').assert
const chai = require('chai')
const should = require('chai').should();
const expect = chai.expect;
const studentsOperations = require('../studentsOperations');


describe('Students operations verification', function () {
    describe('Check enrolled students', function () {
        it('Should receive an enrolled student name and return a valid json object', function () {
            let studentName = "Nikola Tesla"
            let result = studentsOperations.checkStudentInClass(studentName)
            expect(result).to.be.an('object');
            expect(result).to.have.property('name')
            expect(result.name).to.not.be.empty;
            expect(result).to.have.property('dateOfBirth')
            expect(result.dateOfBirth).to.not.be.empty;
            expect(result.dateOfBirth).to.be.equals("10/07/1856");
        });

        it('Should throw an error if the name is an empty string', function () {
            let studentName = ""
            try {
                let result = studentsOperations.checkStudentInClass(studentName)
                expect(result).to.be.empty;
                console.log(result);
            }
            catch(error){
                expect(error).to.be.an('error')
                expect(error.message).not.to.be.empty
            }
            
        });
    });
});