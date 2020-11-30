const express = require("express");
const router = express.Router();
const User = require('../model/Contact');


router.get('/', (req, res) => 
res.render("index")
)

// router.post("/api", async (req, res) => {
//     try {
//        const user = new User(
//         //   req.body
//           {
//           name: req.body.name,
//           email: req.body.email,
//           phone: req.body.phone,
//           message: req.body.message
//        }
//        );
//        await user.save();
//        res.send(user);
//     } catch (error) {
//        return res.status(400).json({ message: error.message });
//     }
     
//   });

// router.post("/reg", async(req, res) => { 

//     try {
//         const user = new User(
//             req.body
//         //     {
//         //     // req.body
//         //     name: req.body.name,
//         //     email: req.body.email,
//         //     phone: req.body.phone
//         //     // message: req.body.message
//         // }
//         );
//         await user.save()
//         res.send(user);
        
//     } catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
//     //  const user = await User(req.body)
//     //  user.save()
     

// });
// router.post('/p', async(req, res) => {
//     try {
//         const user = new User(
//             req.body
//         ) 
//         await user.save()
//         res.send(user);
//         console.log(user)

//     } catch (error) {
//        return res.status(500).json({ message: error.message }); 
//     }
    
// });



module.exports = router;