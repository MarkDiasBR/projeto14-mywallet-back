import { Router } from 'express'
import { authValidation } from '../middlewares/auth.middleware.js';
import { schemaParamsTypeValidation, schemaValidation } from '../middlewares/schema.middleware.js';
import { transactionParamsSchema, transactionSchema, editTransactionSchema } from '../schemas/transactions.schemas.js';
import { postTransaction, getTransactions, deleteTransaction, editTransaction } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.use(authValidation);
authRouter.post('/new-transaction/:type',
                schemaValidation(transactionSchema),
                schemaParamsTypeValidation(transactionParamsSchema),
                postTransaction);
authRouter.get('/transactions', getTransactions);
authRouter.delete('/transaction/:id', deleteTransaction);
authRouter.put('/transaction/:id', schemaValidation(editTransactionSchema), editTransaction)

export default authRouter;