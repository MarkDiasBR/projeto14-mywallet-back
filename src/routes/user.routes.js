import { Router } from 'express';
import { schemaValidation } from '../middlewares/schema.middleware.js';
import { signupSchema, signinSchema } from '../schemas/user.schemas.js';
import signupConflictValidation from '../middlewares/signup.middleware.js';
import signinValidation from '../middlewares/signin.middleware.js';
import { signup, signin } from '../controllers/user.controller.js';



const userRouter = Router();

// userRouter.post('/sign-up', functionA)
userRouter.post('/sign-up', schemaValidation(signupSchema), signupConflictValidation, signup);
userRouter.post('/sign-in', schemaValidation(signinSchema), signinValidation, signin);

export default userRouter;

function functionA(req, res) {
    console.log("A")
    res.sendStatus(203);
}