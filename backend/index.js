import express from 'express';
import cors from 'cors';
import photo from './routes/photos';
import './models/connection.db'


const app = express();
const  port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());


app.use('/', photo);


app.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`)

})