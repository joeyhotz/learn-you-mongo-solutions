var mongo = require('mongodb').MongoClient

const ageShouldBeGreaterThan = process.argv[2]

mongo.connect("mongodb://localhost:27017/", function(err, client) {
    if (err) console.error(err)
    var db = client.db("learnyoumongo")
    var collection = db.collection("parrots")
    collection
        .find({
            age: { $gt : Number(ageShouldBeGreaterThan) },
        })
        .toArray((err, docs) => {
            if (err) console.error(err)
            console.log(docs)
            client.close()
    })
})