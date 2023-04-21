import { db } from '../app.js';
import { ObjectId } from 'mongodb';

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
};

export async function getTransactions(req, res) {
    const { userId } = res.locals.session;

    try {
        const transactions = await db.collection('transactions').find({ userId }).toArray();
        res.send(transactions)
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
};

export async function deleteTransaction(req, res) {
    // const { userId } = res.locals.session;
    const { id } = req.params;

    try {
        const result = await db.collection('transactions').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) return res.status(404).send('🚫 Item doesn\'t exist!');
        res.send('✅ Transaction erased SUCESSFULLY!');
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}