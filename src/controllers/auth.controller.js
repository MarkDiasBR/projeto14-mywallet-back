import { db } from '../app.js';

export async function postTransaction(req, res) {
    const { title, value } = req.body;
    const { type } = req.params;
    const { userId } = res.locals.session;
    console.log(type)

    try {
        await db.collection('transactions').insertOne({ title, value, type, userId });
        res.status(201).send('✅ Transaction created SUCESSFULLY!');
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}