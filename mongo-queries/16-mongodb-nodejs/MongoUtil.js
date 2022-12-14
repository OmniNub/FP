const MongoClient = require('mongodb').MongoClient;

let _db = null;

async function connect(url,databasename){       //defines a fn that allows connection to the db
    let client = await MongoClient.connect(url, {       //sets up async + await with mongo's methods
        useUnifiedTopology: true                    //allows the usage of the stable versions of Mongo
    })

    _db = client.db(databasename);      //selects the database of choice
}

function getDB(){                       //makes the function callable
    return _db;
}

module.exports = { connect, getDB}          // exports only these 2 functions while "hiding" the rest of the code