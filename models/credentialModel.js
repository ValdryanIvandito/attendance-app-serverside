import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Credential = mongoose.model("credentials", credentialSchema);

export default Credential;