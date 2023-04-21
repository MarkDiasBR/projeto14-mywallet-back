import chalk from 'chalk';
import { MongoClient } from "mongodb";

export default async function connectToDatabase() {
    let db;
    const mongoClient = new MongoClient(process.env.MONGO_URI);

    try {
        await mongoClient.connect();
        db = mongoClient.db();
        console.log(chalk.black.bgGreen('\n [MongoDB] DataBase connected SUCCESSFULLY! '), '🗄️📨✨')
        console.log(chalk.white(" DB URL:"), chalk.underline.italic.blue(process.env.DATABASE_URL));
    } catch (err) {
        console.log(chalk.white.bgRed('\n [MongoDB] DataBase connection failed! '), '🗄️📨🚫');
        console.error(err.message);
    }

    return db;
};