import jwt from "jsonwebtoken";

export const generateToken = (user) => {
   return jwt.sign(
      {
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET || "Yr6+NnM7*WFN!42C%E",
      {
         expiresIn: "30d",
      }
   );
};

export const isAuth = (req, res, next) => {
   const authorization = req.headers.authorization;
   if (authorization) {
      const token = authorization.slice(7, authorization.length);
      jwt.verify(token, process.env.JWT_SECRET || "Yr6+NnM7*WFN!42C%E", (err, decode) => {
         if (err) {
            res.status(401).send({ message: "Invalid Token" });
         } else {
            req.user = decode;
            next();
         }
      });
   } else {
      res.status(401).send({ message: "No Token" });
   }
};
