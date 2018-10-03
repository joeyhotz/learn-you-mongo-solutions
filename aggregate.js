var mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'
const dbname = 'learnyoumongo'
const colname = 'prices'

const size = process.argv[2]

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) console.error(err)
    
    var db = client.db(dbname)
    var collection = db.collection(colname)

    collection
        .aggregate([
            { $match: { size: size }},
            { $group: { 
                _id: 'averagePrice',
                averagePrice: { $avg: '$price' }
            }}
        ]).toArray((err, results) => {
            if (err) console.error(err)
            var avgPrice = Number(results[0].averagePrice).toFixed(2)
            console.log(avgPrice)
            client.close()
        })
})