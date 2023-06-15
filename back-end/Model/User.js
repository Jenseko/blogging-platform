import mongoose, { Schema, model } from 'mongoose';
import { Post } from '../Model/Post.js';

const userSchema = new Schema(
    {
        name: String,
        email: String,
        posts: String
    }
);

export const User = model('User', userSchema);