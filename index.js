const express = require('express')
const {json} = require('body-parser')
const port = 8081;
const app = express();
const masterRoutes = require('./server/masterRoutes');


app.use(express.static(`${__dirname}/public`));
app.use(json());
masterRoutes(app);

console.log(__dirname);

app.listen(port, ()=> console.log(`Express listening on ${port}`));
