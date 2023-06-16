import mongoose from 'mongoose';
import { User, Post } from '../Model/indexModel.js';
import data from './seed_data.json' assert {type: 'json'};


// --------------------------------------------------

// Verbindung zu mongoDB aufbauen
mongoose.connect('mongodb://localhost:27017/blogging-platform');

// --------------------------------------------------

// Vor jedem Durchgang wird die Datenbank/Collection gelöscht
await mongoose.connection.dropDatabase();

// Extrahieren der Authoren aus dem blogPosts-Array
const authors = data.blogPosts.map((article) => article.author);
console.log(authors);

// Entfernen aller doppelten Authoren --> new Set Methode !!!
const uniqueAuthors = [...new Set(authors)];
console.log(uniqueAuthors);

const userCreationPromiseArray = uniqueAuthors.map((author) => {
    const email = author.split(" ").join(".") + "@gmail.com";
    // const password = email;
    const user = new User({ name: author, email: email });
    // user.setPassword(password.toLocaleLowerCase());

    return User.create({ name: author, email });
});

// console.log({ userCreationPromiseArray });

await Promise.all(userCreationPromiseArray);

// --------------------------------------------------------
// Erstellen und speichern der blogPosts in der Datenbank
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
    // console.log(JSON.stringify(user))
}