import mongoose from 'mongoose';
import { User, Post } from '../Model/indexModel.js';
import data from './seed_data.json' assert {type: 'json'};


// --------------------------------------------------

// Verbindung zu mongoDB aufbauen
mongoose.connect('mongodb://localhost:27017/blogging-platform');

// --------------------------------------------------


// Extrahieren der Authroen aus dem blogPosts-Array
const authors = data.blogPosts.map((article) => article.author);
console.log(authors);

// Entfernen aller doppelten Authoren --> new Set Mothode !!!
const uniqueAuthors = [...new Set(authors)];
console.log(uniqueAuthors);

const userCreationPromiseArray = uniqueAuthors.map((author) => {
    const email = author.split(" ").join(".") + "@gmail.com";
    return User.create({ name: author, email });
});

console.log({ userCreationPromiseArray });

await Promise.all(userCreationPromiseArray);



for (let postData of data.blogPosts) {

    // neuer Post
    let post = new Post({ title: postData.title, content: postData.content });
    // Finde den Author
    const author = await User.findOne({ name: postData.author });
    // Weise den Author dem Post zu
    post.author = author;
    // Speichere post (upload in die DB)
    post = await post.save();
    // Hinzufügen des Posts zur User.posts property
    author.posts.push(post);
    // Speichern der Änderungen am Author
    let savedAuthor = await author.save();
    // console.log(savedAuthor);

    const user = await User.find().populate('posts');
    console.log(JSON.stringify(user))
}