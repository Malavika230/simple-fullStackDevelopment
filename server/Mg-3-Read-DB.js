var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/books";

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  const db = client.db('books')
  const collection = db.collection('classics')

  collection.find({}).toArray(function(err, childrenClassics) {
    if (err) throw err;
    console.log(childrenClassics);
	
    client.close();
  });
});