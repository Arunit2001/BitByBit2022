require('dotenv').config();
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback)=>{
  mongoClient.connect(process.env.MONGO_KEY)
  .then(client => {
    console.log('Database Connected');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err)
    throw err;
  });
};

const getDB = () =>{
  if(_db) {
    return _db;
  }
  throw 'No Database found!';
}

// module.exports = mongoConnect;

// To export different functions.
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;