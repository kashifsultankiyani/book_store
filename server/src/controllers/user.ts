const jsonwebtoken = require('jsonwebtoken');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");

import { User } from "../models/user";

export const register =  async (req: any, res: any, next: any)=>{
    try{
        const userName = req.body.userName;
        const email = req.body.email;
        let password = req.body.password;
  
  
              if (!userName || !email || !password) {
                return res.sendStatus(400);
             }
  
             const salt = genSaltSync(10);
             password = hashSync(password, salt);
  
               
  
        // const user =  await db.insertUser(userName, email, password);

        User.create({
            userName,
            email,
            password
        })
        .then((user: any) => {
        //   return res.json({
        //     message: "Record created successfully!",
        //   });

        const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
        res.cookie('token', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict' , expires: new Date(Number(new Date()) + 30*60*1000) }); //we add secure: true, when using https.
 
 
        return res.json({token: jsontoken});

        })
        .catch((error: any) => {
          console.log(error);
          return res.json({
            message: "Unable to create a record!",
          });
        });
         
 
            //return res.redirect('/mainpage');
  
    } catch(e){    
        console.log(e);
        res.sendStatus(400);
    }
};
 
 
export const login = async(req: any, res: any, next: any)=>{
//     try{
//     const userName = req.body.userName;
//     const password = req.body.password;
//     const user = User.findAll({
//         attributes: ["userName", "email", "password"],
//         where: { userName, password },
//      })
//         .then((result: any) => {
//            return res.json(result);
//         })
//         .catch((error: any) => {
//            console.log(error);
//            return res.json({
//               message: "Unable to fetch records!",
//            });
//         });
     
//     if(!user){
//         return res.json({
//             message: "Invalid email or password"
//         })
//     }
 
//     // const isValidPassword = compareSync(password, user.password);
//     // if(isValidPassword){
//     //     user.password = undefined;
//     //     const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
//     //     res.cookie('token', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict' , expires: new Date(Number(new Date()) + 30*60*1000) }); //we add secure: true, when using https.
 
//     //     res.json({token: jsontoken});
//     //    //return res.redirect('/mainpage') ;
 
//     // }  else{
//     //     return res.json({
//     //         message: "Invalid email or password"
//     //     });
//     // } 

//     // } catch(e){
//     //     console.log(e);
//     // }
// });
 
}