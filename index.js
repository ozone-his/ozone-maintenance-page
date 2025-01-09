const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs');
const date = require('date-and-time')
const now  =  new Date();
app.locals.serverStartTime = date.format(now,'YYYY/MM/DD HH:mm:ss');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: process.env.TITLE || 'The system is currently undergoing maintenance',
        message: process.env.MESSAGE || 'We are currently undergoing maintenance. Please check back later.',
        supportPhone: process.env.SUPPORT_PHONE || '- - - - - - - - -',
        supportEmail: process.env.SUPPORT_EMAIL || 'info@ozone-his.com',
        pageGenerationTimeLabel: process.env.PAGE_GENERATION_LABEL || 'This message was last updated on',
        serverStartTime: app.locals.serverStartTime
    });
});

const server = app.listen(3000, function () {
    console.log('listening to port 3000')
});
