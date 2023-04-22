import { db } from '../app.js';
import { ObjectId } from 'mongodb';

export async function postTransaction(req, res) {

    const { title, value, date } = req.body;
    const { type } = req.params;
    const { userId } = res.locals.session;
    console.log(type)

    try {
        await db.collection('transactions').insertOne({ title, value, date, type, userId });
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

    const { id } = req.params;

    try {
        const result = await db.collection('transactions').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) return res.status(404).send('🚫 Item doesn\'t exist!');
        res.send('✅ Transaction erased SUCESSFULLY!');
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}

export async function editTransaction(req, res) {

    const { id } = req.params;

    try {
        const result = await db.collection('transactions').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
        if (result.matchedCount === 0) return res.status(404).send('🚫 Item doesn\'t exist!');
        if (result.updatedCount !== 0) return res.send('✅ Transaction edited SUCESSFULLY!');
    } catch (err) {
        res.status(500).send(`🚫 Unexpected server error!\n\n${err.message}`);
    }
}