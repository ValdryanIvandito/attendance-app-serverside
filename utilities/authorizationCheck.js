import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authorizationCheck = (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Not Authorized!" });
  }

  try {
    JWT.verify(token, process.env.SECRET_JWT);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not Authorized!" });
  }

  next();
};

export { authorizationCheck };
