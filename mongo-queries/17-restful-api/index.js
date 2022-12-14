const express = require('express');
const cors = require('cors');

require('dotenv').config();
const MongoUtil = require('./MongoUtil');

const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());


app.use(cors());


async function main(){
    await MongoUtil.connect(MONGO_URI, 'FP_pau');
    app.get('/', function (req,res){
        res.send('Success')
    })
}

main();

app.listen(3000, function() {

    console.log('Server has started')
})