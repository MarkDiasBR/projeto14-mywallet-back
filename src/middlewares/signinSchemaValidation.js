import { signinSchema } from "../schemas/user.schemas.js";

export default function signinSchemaValidation(req, res, next) {
    
    const { validation, error } = signinSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => `\n${detail.message}`);
        return res.status(422).send(`🚫 Unprocessable entity!\n${errors}`)
    }

    next();
}