const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const approuter = require('./src/routes/app');
const USER = require('./src/model/Contact');
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



app.post("/api", async (req, res) => {
  try {
     const user = new USER(
      //   req.body
        {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
     }
     );
     await user.save();
   //   res.send(user);
   console.log(user)
   res.render('index')
  } catch (error) {
     return res.status(400).json({ message: error.message });
  }
   
});




app.listen(port, () => console.log(`Server listening on port ${port}`))