var mongo = require('mongodb').MongoClient

const firstName = process.argv[2]
const lastName = process.argv[3]
const url = 'mongodb://localhost:27017/';

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) console.error(err)
    var db = client.db("learnyoumongo")
    var docsCollection = db.collection("docs")

    docsCollection
        .insert({
            firstname: firstName,
            lastname: lastName
        }, (err, data) => {
            if (err) console.error(err);            
        })
        .find({})
        .toArray((err, data) => {
            if (err) console.error(err);
            console.log(data)
            client.close();
        })
})