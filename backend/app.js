import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import companyRoute from './routes/companyRoute.js';
import reviewRoute from './routes/reviewRoute.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,              
  }));

app.use('/uploads',express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://aditya:adminPassword@cluster0.fahcfqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() =>console.log('Database connected'))
.catch((error)=>{
console.log('Database connection error',error)
});

app.use('/company', companyRoute);
app.use('/review', reviewRoute);

app.listen(5000,()=>{
    console.log('server started at.. http://localhost:5000');
})
