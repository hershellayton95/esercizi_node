import { body } from "express-validator";

const schema = [
    body("name")
        .notEmpty()
        .withMessage('name mancante')
        .isString()
        .withMessage('il name deve essere di tipo stringa'),
    body("lastname")
        .notEmpty()
        .withMessage('lastname mancante')
        .isString()
        .withMessage('il lastname deve essere di tipo stringa'),
    body("email")
        .notEmpty()
        .withMessage('email mancante')
        .isEmail()
        .withMessage('email non valida')
        .normalizeEmail(),
    body("password")
        .notEmpty()
        .withMessage('password mancante')
        .isString()
        .withMessage('la password deve essere di tipo stringa')
        .isLength({ min: 5, max: 10 })
        .withMessage('la password deve essere min 5 lettere max 10')
]

export default schema;
