import { db } from '../app.js';
import bcrypt from 'bcrypt';

export default async function signinValidation(req, res, next) {

    const { email, password } = req.body;
    let user;

    try {
        user = await db.collection('users').findOne({ email: email });
        if (!user) return res.status(404).send('🚫 E-mail is not registered!'); 
        
        
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) return res.status(401).send('🚫 Password is incorrect!');

    delete user.password;
    res.locals.user = user;

    next();
}