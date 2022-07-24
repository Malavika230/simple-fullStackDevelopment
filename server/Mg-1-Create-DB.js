const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

const myFile = require('fs'); // We need this node package to read from file
var jsonChildrenClassics;

myFile.readFile('classics.txt', 'utf8', function (error, Children) {
		if (error) {
			console.log("There's an error", error);
			return;
		}
		console.log("Successfully read local JSON File");
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
  jsonChildrenClassics = JSON.parse(Children);
  collection.insertMany(jsonChildrenClassics, function (err, result) 
	{
        client.close();
	});
  
})
})