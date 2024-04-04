const express = require('express');

// express app
const app = express();

// serve static files from the 'public' directory
app.use(express.static('public'));

// home page
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

// about page
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });

});

// skills page
app.get('/skills', (req, res) => {
    res.sendFile('./views/skills.html', { root: __dirname });

});

// portfolio page
app.get('/portfolio', (req, res) => {
    res.sendFile('./views/portfolio.html', { root: __dirname });

});

// contact page
app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });

});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
  });

const userRouter = require('./routers/users');


// add all the different routes from userRouter
// to anything that starts with './users'
app.use('/users', userRouter);

app.listen(3000);