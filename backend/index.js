import express from 'express';
import cors from 'cors';
import photo from './routes/photos';
import mongoose from 'mongoose';



const app = express();
const  port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://jose:849394995@cluster0-ltdya.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use('/', photo);



app.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`)

})