import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// --- POST/:ID -------------------------

app.get('/post/:id', (req, res) => {

});


// --- AUTHOR/:ID -------------------------

app.get('/author/:id', (req, res) => {

});


// --- AUTHOR -----------------------------

app.get('/author', (req, res) => {

});


// --- POST -------------------------------

app.get('/post', (req, res) => {

});


// -----------------------------------------

app.listen(PORT, () => {
    console.log(`Hey, our Server runs ${PORT} Miles per Day!`);
});