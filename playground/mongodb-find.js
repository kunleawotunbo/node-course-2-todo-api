//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/*
  db.collection('Todos').find({
    _id: new ObjectID('591a40ba02af851d05b52cc7')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
*/
db.collection('Todos').count().then((count) => {
  console.log(`Todos count: ${count}`);
}, (err) => {
  console.log('Unable to fetch todos', err);
});
  // close the db connection
//  db.close();
});
