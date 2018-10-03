var mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'
const dbname = 'learnyoumongo'
const colname = 'parrots'

const ageShouldBeGreater = +process.argv[2]

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) console.error(err)
    
    var db = client.db(dbname)
    var collection = db.collection(colname)

    collection
        .count({
            age: { $gt: ageShouldBeGreater }
        }, (err, count) => {
            if (err) console.error(err)
            console.log(count)
            client.close()
        })
})