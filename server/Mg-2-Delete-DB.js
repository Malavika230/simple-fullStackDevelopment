const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

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
  collection.drop((err, item) => {
  console.log(item)
  client.close()
})
})

