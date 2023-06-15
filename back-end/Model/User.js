import { Schema, model } from 'mongoose';
import { Post } from '../Model/Post.js';

console.log({ Post });

const userSchema = new Schema(
    {
        name: String,
        email: String,
        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
    }
);

export const User = model('User', userSchema);