const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user objects', () => {
        var email = 'esanjoyganguly@gmail.com';
        var password = 'Qwerty@123';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});