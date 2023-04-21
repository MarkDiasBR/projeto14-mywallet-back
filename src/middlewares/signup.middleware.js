import { db } from '../app.js';

export default async function signupConflictValidation(req, res, next) {

    try {
        const userEmail = await db.collection('users').findOne({ email: req.body.email });
        if (userEmail) return res.status(409).send('🚫 E-mail already registered!');
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }

    next();
}