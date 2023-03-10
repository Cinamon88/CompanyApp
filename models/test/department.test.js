const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {
    it('should throw an error if no "name" arg', () => {
        const dep = new Department({}); // create new Department, but don't set `name` attr value

        dep.validate(err => {
            expect(err.errors.name).to.exist;
        });
    });
    it('should throw an error if "name" is not a string', () => {

        const cases = [{}, []];
        for(let name of cases) {
          const dep = new Department({ name });
      
          dep.validate(err => {
            expect(err.errors.name).to.exist;
          });
      
        }
    });
    it('should throw an error if "name" is too short or too long', () => {

        const cases = ['Abc', 'abcd', 'Lorem Ipsum, Lorem Ip']; // we test various cases, some of them are too short, some of them are too long
        for(let name of cases) {
          const dep = new Department({ name });
      
          dep.validate(err => {
            expect(err.errors.name).to.exist;
          });
      
        }
    });
    it('should not throw an error if "name" is ok', () => {
        const cases = ['Managment', 'Human Resources']; // various cases of department names
        for(let name of cases) {
            const dep = new Department({ name });
        }
    });

    after(() => {
        mongoose.models = {};
    });
});