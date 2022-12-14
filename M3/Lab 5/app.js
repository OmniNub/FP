const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
let app = express();


app.set('view engine','hbs');
app.use(express.static('public'));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options)
{
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

app.get('/', (req,res) =>{
    res.render('index');
})
app.get('/manageitems', (req,res) =>{
    res.render('manageitems');
})
app.get('/submitnew', (req,res) =>{
    res.render('submitnew');
})
app.get('/fruits', (req,res) =>{
    let favourite="apples";
    res.render('fruits', {
        'fruits':['apples','bananas','oranges'],
        'favouriteFruit' : favourite
    });
})



app.listen(3000, () => {
    console.log('Server has started.');
})