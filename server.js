const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;
const home = require('./routes/home/index'); // rename this to router
const about = require('./routes/about/index'); // rename this to router
const contact = require('./routes/contact/index'); // rename this to router

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);

app.use(express.static('public'));
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
