const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const approuter = require('./src/routes/app');
require("./src/db/conn")

const port = process.env.PORT || 8000

// Paths
const st_path = path.join(__dirname,"./public");
const temp_path = path.join(__dirname,"./templates");
// console.log(temp_path)
const par_path = path.join(__dirname,"./templates/partials");

// Middleware
app.use(express.static(st_path))
   .use(approuter) 
   .use(express.json())
   .use(express.urlencoded({extended:false}));
app.set('view engine', 'hbs');
app.set("views", temp_path);
hbs.registerPartials(par_path)


// app.get('/', (req, res) => 
// res.render("index")
// )




app.listen(port, () => console.log(`Server listening on port ${port}`))