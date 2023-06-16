import { Schema, model } from 'mongoose';
import { Post } from '../Model/Post.js';

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
    }
);

export const User = model('User', userSchema);