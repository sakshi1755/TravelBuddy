import admin from "../config/passport.js";
export const verifyToken= async(req , res)=>{
    const {token}=req.body;
    if (!token) {
        return res.status(400).json({ error: "Token is required." });
      }
    
    try{
        const decodedToken= await admin.auth().verifyIdToken(token);
        if(!decodedToken.email.endsWith("iitbhilai.ac.in")){
            res.status(403).json({error: "only iit bhilai people can attend"});

        }  
    
        res.status(200).json({ message: "Login successful", user: decodedToken });

    }
    catch(err){
         res.status(401).json({ error: "Invalid or expired token." });
        }

};


