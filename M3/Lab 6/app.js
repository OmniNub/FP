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


app.use(express.urlencoded({extended:false}));

app.get('/add-food', (req,res) => {
    res.render('add_food');
})

app.post('/add-food', (req, res) => {
    let { foodName, calories, tags } = req.body;
    res.render("display_food_summary", {
      foodName,
      calories,
      tags: tags.join(', ')
  }); 
});

app.listen(3000, () => {
    console.log('Server has started.')
}
)

