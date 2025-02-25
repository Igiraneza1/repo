import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mainRouter from './routes/indexRouting.js';
import bodyParser from 'body-parser';

dotenv.config();
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.json()); 
app.use('/', mainRouter);
const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.g4lhj.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.set('strictQuery', false);
mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    
