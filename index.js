const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const approuter = require('./src/routes/app');
const USER = require('./src/model/Contact');
// const { use } = require('./src/routes/app');
require("./src/db/conn")

const port = process.env.PORT || 8000

// Paths
const st_path = path.join(__dirname,"./public");
const temp_path = path.join(__dirname,"./templates/views");
const par_path = path.join(__dirname,"./templates/partials");

// Middleware
app.use(express.static(st_path))
   .use(approuter) 
   .use(express.json())
   .use(express.urlencoded({extended:false}));
app.set('view engine', 'hbs');
app.set("views", temp_path);
hbs.registerPartials(par_path)



app.post("/signup", async (req, res) => {
  try {
    const password = req.body.password
    const cpassword = req.body.cpassword

    if(password == cpassword){

     const user = new USER(
        {
        name: req.body.name,
        email: req.body.email,
        password,
        
     }
     );
     await user.save();
   console.log(user)
   res.render('index')
  } 
  else{
     res.send("Check Password!");
  }
  }catch (error) {
     return res.status(400).json({ message: error.message });
  }

});

app.post("/signin", async(req, res) => {
   try {
      const el = req.body.email;
      const password = req.body.password;
     
      const email = await USER.findOne({email:el})

      if(email.password != password){
         console.log("Password not found")
         res.render("index")
      }
      else{
         res.status(201).render("index");
         console.log("Success");
         console.log(email);
      }
      
   } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(error.message)
   }
});


app.listen(port, () => console.log(`Server listening on port ${port}`))