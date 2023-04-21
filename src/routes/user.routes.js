import { Router } from 'express'
import userSchemaValidation from '../middlewares/userSchemaValidation.js';
import { signupSchema, signinSchema } from '../schemas/user.schemas.js';
import signupConflictValidation from '../middlewares/signupConflictValidation.js';
import signinValidation from '../middlewares/signinValidation.js';
import { signup, signin } from '../controllers/user.controller.js';



const userRouter = Router();

userRouter.post('/sign-up', userSchemaValidation(signupSchema), signupConflictValidation, signup);
userRouter.post('/sign-in', userSchemaValidation(signinSchema), signinValidation, signin);

export default userRouter;