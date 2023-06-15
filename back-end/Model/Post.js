import { Schema, model } from 'mongoose';
import { User } from '../Model/User.js';

console.log({ User });

const postSchema = new Schema(
    {
        title: String,
        content: String,
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        tags: [String]
    });

export const Post = model("Post", postSchema);