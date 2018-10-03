var mongo = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/"
const dbname = process.argv[2]

mongo.connect(url, function(err, client) {
    if (err) console.error(err)
    var db = client.db(dbname)
    var collection = db.collection("users")

    collection
        .update({
            username: "tinatime" 
        }, {
            $set : { age: 40 }
        }, (err, data) => {
            if (err) console.error(err)
            client.close()
        })
})