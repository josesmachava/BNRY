import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()


const uri = process.env.ATLAS_URI;

console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
