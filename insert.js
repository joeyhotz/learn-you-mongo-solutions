var mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/';

var objectToAdd = {
    firstName: process.argv[2],
    lastName: process.argv[3]
}

mongo.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) console.error(err)
    var db = client.db("learnyoumongo")
    var docsCollection = db.collection("docs")

    docsCollection
        .insert(objectToAdd, (err, data) => {
            if (err) console.error(err);     
            console.log(JSON.stringify(objectToAdd));   
            client.close();    
        })
})