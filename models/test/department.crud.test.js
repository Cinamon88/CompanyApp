const mongoose = require('mongoose');
const Department = require('../department.model');
const expect = require('chai').expect;

describe('Department', () => {
    
    after(() => {
        mongoose.models = {};
    });
});