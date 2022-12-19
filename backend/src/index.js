const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3001;

app.use(express.json({ extended: true }));  

app.get('', (req, res) => res.send('SERVER STARTED!!!'));
app.use(cors())
app.use('/api', require('./routes'));


async function start() {
    try {

        app.listen(PORT, () => console.log(`PORT is ${PORT}...`));
    } catch (err) {
        console.log(err.stack);
    }
};

start();

module.exports = app;