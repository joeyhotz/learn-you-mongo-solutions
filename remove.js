var mongo = require('mongodb').MongoClient

const dbname = process.argv[2]
const colname = process.argv[3]
const idfordel = process.argv[4]
const url = 'mongodb://localhost:27017/'

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) console.error(err)
    
    var db = client.db(dbname)
    var collection = db.collection(colname)

    collection
        .remove({
            _id: idfordel
        }, (err, data) => {
            client.close()
        })
})