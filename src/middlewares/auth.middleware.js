import { db } from '../app.js';

export async function authValidation(req, res, next) {
    
    const { authorization } = req.headers;
    
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.status(401).send('🚫 Access denied!');

    try {
        const session = await db.collection('sessions').findOne({ token });
        if (!session) return res.status(401).send('🚫 Access denied!');

        res.locals.session = session;

    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
    
    next();
}