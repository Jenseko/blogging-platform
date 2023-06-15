import mongoose from 'mongoose';
import { User, Post } from '../Model/indexModel.js';
import data from './seed_data.json';

console.log(data);

// --------------------------------------------------

// Verbindung zu mongoDB aufbauen
mongoose.connect('mongodb://localhost:27017/blogging-platform');

// --------------------------------------------------


const seedData = async () => {



    const userData = {}
}
