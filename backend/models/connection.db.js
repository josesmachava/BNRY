import mongoose from 'mongoose';



const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://jose:849394995@cluster0-ltdya.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
