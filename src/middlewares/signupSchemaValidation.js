import { signupSchema } from "../schemas/user.schemas.js";

export default function signupSchemaValidation(req, res, next) {
    const signinObject = req.body;
    
    const { validation, error } = signupSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => `\n${detail.message}`);
        return res.status(422).send(`🚫 Unprocessable entity!\n${errors}`)
    }

    next();
}