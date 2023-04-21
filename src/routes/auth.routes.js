import { Router } from 'express'
import { authValidation } from '../middlewares/auth.middleware.js';
import { schemaParamsTypeValidation, schemaValidation } from '../middlewares/schema.middleware.js';
import { transactionParamsSchema, transactionSchema } from '../schemas/transactions.schemas.js';
import { postTransaction, getTransactions, deleteTransaction } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/new-transaction/:type',
                authValidation,
                schemaValidation(transactionSchema),
                schemaParamsTypeValidation(transactionParamsSchema),
                postTransaction);
authRouter.get('/transactions', authValidation, getTransactions);
authRouter.delete('/transaction/:id', authValidation, deleteTransaction);

export default authRouter;