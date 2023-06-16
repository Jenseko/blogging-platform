import { Schema, model } from 'mongoose';
import { Post } from '../Model/Post.js';
import crypto from 'crypto';

// ----------------------------------------

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        // salt: { type: String, required: true },
        // hash: { type: String, required: true },
        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
    }
);

// // vorher crypto importieren!
// // bitte hier nur normale Funktionen verwenden, keine Arrow-Functions!!!
// userSchema.methods.setPassword = function (password) {
//     // Salt erstellen
//     this.salt = crypto.randomBytes(64).toString("hex"); // --> erstellt 64-stelligen String aus 64 zufälligen Zeichen von 0 bis F
//     // Password mit Salt 'hashen'
//     this.hash = crypto
//         .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
//         .toString("hex");
// };

// // Funktion zum Vergleichen des eingegebenen PAsswords mit dem in der Datenbank hinterlegten
// userSchema.methods.verifyPassowrd = function (password) {
//     // Vergleichen beider Passwörter mit Zugabe des Salt-Wertes
//     const hash = crypto
//         .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512') // --> Generieren des Hashwertes
//         // ------>  Variable, Salt-String, Durchgänge, Länge (Bytes), Hash-Algorithmus
//         .toString('hex'); // --> Umwandlung des generierten Hashes in hexadezimalen String

//     return this.hash === hash;
// };


export const User = model('User', userSchema);