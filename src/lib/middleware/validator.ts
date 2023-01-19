import { validationResult } from 'express-validator';
import express from "express";


const validatorResultMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    next()
}


export default validatorResultMiddleware;
