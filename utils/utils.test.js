const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number');
            /* if ( res !== 44){
                throw new Error(`Expected 44 but got ${res}`);
            } */ 
        });
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4,3, (sum) =>{
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    it('should multiple two numbers', () => {
        var res = utils.multiply(3,3);
        expect(res).toBe(9).toBeA('number');
        /* if ( res !== 9){
            throw new Error(`Expected 44 but got ${res}`);
        } */ 
    });

    it('should get square of number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
        /* if ( res !== 9){
            throw new Error(`Expected 44 but got ${res}`);
        } */ 
    });

    it('should set first name and last name inside user object', () => {
        var user = { location: 'Bangalore', age: 98};
        var res = utils.setName(user, 'Sanjoy Ganguly');
        expect(res).toInclude({
            firstName: 'Sanjoy',
            lastName: 'Ganguly'
        });
    });   

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (result) =>{
            expect(result).toBe(16).toBeA('number');
            done();
        });
    });
});

it('should expect some values', () => {
    // expect(12).toNotBe(13);
    /* expect({
        name: 'Sanjoy',
        age: 38
    }).toEqual({
        name:'Sanjoy',
        age:38
    }); */

    // expect([3,7,4]).toInclude([3]);
    // expect([3,7,4]).toExclude([7]);

    // expect({name: 'Andrew', age: 55, height: 189}).toInclude({age: 55});

    expect({name: 'Andrew', age: 55, height: 189}).toExclude({weight: 55});
});

