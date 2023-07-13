const jwt = require("jsonwebtoken")

const Auth =  (req , res , next) => {
    try{
        
      const token = req.headers.authorization;
        const decoded = jwt.verify(token,"HDFJDHFD5nbvjh454s6c.yto(gihfuscscsnh");
       req.userId = decoded._id;
        next();
    }
    catch(e)
    {
        res.send({ error : "Invalid Token"});
    }
}

module.exports = Auth;