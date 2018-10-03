var mongo = require('mongodb').MongoClient

const ageShouldBeGreaterThan = process.argv[2]
const url = 'mongodb://localhost:27017/';

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) console.error(err)
    var db = client.db("learnyoumongo")
    var collection = db.collection("parrots")

    collection
        .find({
            age: { $gt : Number(ageShouldBeGreaterThan) },
        })
        .project({
            name: 1,
            age: 1,
            _id: 0
        })
        .toArray((err, docs) => {
            if (err) console.error(err)
            console.log(docs)
            client.close()
    })
})