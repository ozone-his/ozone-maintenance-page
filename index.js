const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: process.env.TITLE || 'The system is currently undergoing maintainance',
        message: process.env.MESSAGE || 'We are currently undergoing maintainance. Please check back later.',
        supportPhone: process.env.SUPPORT_PHONE || '+00 000 000 0000',
        supportEmail: process.env.SUPPORT_EMAIL || 'mail@address.com'
    });
});

const server = app.listen(3000, function () {
    console.log('listening to port 3000')
});