import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Credential from "../models/credentialModel.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createEncryptedPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

(async () => {
  const username = process.env.MAKE_USERNAME;
  const retrievedUser = await Credential.findOne({ username });

  if (retrievedUser) {
    console.log("Username is already in use!");
    mongoose.disconnect();
    return;
  }

  const password = process.env.MAKE_PASSWORD;
  const encryptedPassword = await createEncryptedPassword(password);

  const user = new Credential({
    username,
    password: encryptedPassword,
  });

  await user.save();
  console.log("Credentials created successfully!");

  mongoose.disconnect();
})();
