import { Router } from 'express'
import { signup, signin } from '../controllers/user.controller.js';
import userSchemaValidation from '../middlewares/userSchemaValidation.js';
import signupConflictValidation from '../middlewares/signupConflictValidation.js';
// import signinSchemaValidation from '../middlewares/signinSchemaValidation.js';
import { signupSchema, signinSchema } from '../schemas/user.schemas.js';


const userRouter = Router();

userRouter.post('/sign-up', userSchemaValidation(signupSchema), signupConflictValidation, signup);
userRouter.post('/sign-in', userSchemaValidation(signinSchema));

export default userRouter;