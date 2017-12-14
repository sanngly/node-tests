const express = require('express');
// const request = require('supertest');

const port = process.env.PORT || 3000;
var app = express();

app.get('/', (req, res) => {
    // res.status(404).send('Hello Java World.');
    res.status(404).send({
        error: 'Page Not Found',
        name: 'ToDo List v1.0'
    });
});

app.listen(port, () => {
    console.log(`Node web-server is running at ${port}`);
});

module.exports.app = app;

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'sanngly', age: 38 });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Andrew',
        age: 25
    }, {
       name: 'Salmon',
       age: 23, 
    }, {
        name: 'Eeranna',
        age: 21
    }]);
});
/* request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
 */
