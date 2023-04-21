import { db } from '../app.js';
import bcrypt from 'bcrypt';

export default async function signinValidation(req, res, next) {

    const { email, password } = req.body;

    const user = await db.collection('users').findOne({ email: email });
    if (!user) return res.status(404).send('🚫 E-mail is not registered!');

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) return res.status(401).send('🚫 Password is incorrect!');

    delete user.password;
    res.locals.user = user;

    next();
}