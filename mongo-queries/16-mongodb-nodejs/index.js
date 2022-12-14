const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
const PORT = 3000;
const MongoUtil = require('./MongoUtil');

require('dotenv').config();

const app = express();

app.set('view engine', 'hbs');
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

require("handlebars-helpers")({
    handlebars: hbs,
})

app.use(express.urlencoded({extended:false}));

async function main(){
    const url = process.env.MONGO_URI;
    const dbName = "FP_pau";

    await MongoUtil.connect(url, dbName);
    console.log('DB connected')

    app.get('/', function(req,res) {
        res.send('Hi there');
    })

    app.get('/display-food', async function(req,res) {
        let db = MongoUtil.getDB();

        let foodRecords = await db.collection("food").find({}).toArray();

        res.render('display-food', {
            foodRecords:foodRecords
        })
    })

}

main()

app.listen(PORT,function(){
    console.log(`Server is running at PORT ${PORT}`)
})