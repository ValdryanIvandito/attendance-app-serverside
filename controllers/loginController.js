import Credential from "../models/credentialModel.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import generateExpiredDate from "../utilities/generateExpiredDate.js";
import dotenv from "dotenv";

dotenv.config();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const credential = await Credential.find({ username });

    if (credential.length === 0) {
      return res.status(404).json({ error: "Username does not exist!" });
    } else {
      const hashedPassword = credential[0].password;
      const validPassword = await bcrypt.compare(password, hashedPassword);

      if (!validPassword) {
        return res.status(404).json({ error: "Invalid password!" });
      } else {
        const expiresIn = 3600;
        const token = JWT.sign({ username }, process.env.SECRET_JWT, {
          expiresIn,
        });
        const expiredDated = generateExpiredDate(expiresIn);

        res.status(200).json({
          message: "Authorized!",
          username,
          token,
          expires_time: expiredDated,
        });
      }
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { login };
