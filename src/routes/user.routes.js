import { Router } from 'express'
import {  } from '../controllers/user.controller.js';
import signupSchemaValidation from '../middlewares/signupSchemaValidation.js';

const userRouter = Router();

userRouter.use(signupSchemaValidation)
userRouter.post('/sign-up', );
userRouter.post('/sign-in', );

export default userRouter;