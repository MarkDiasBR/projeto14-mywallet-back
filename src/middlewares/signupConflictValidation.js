import { db } from '../app.js';

export default async function signupConflictValidation(req, res, next) {

    const userEmail = await db.collection('users').findOne({ email: req.body.email });
    if (userEmail) return res.status(409).send('🚫 E-mail already registered!');

    next();
}