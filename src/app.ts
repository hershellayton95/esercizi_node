import express from "express";
import "express-async-errors";

import { PrismaClient } from "@prisma/client";

import validatorResultMiddleware from "./lib/middleware/validator"
import schema from "./lib/schema/schema";
import { param } from "express-validator";

const prisma = new PrismaClient();

const app = express();

app.use(express.json())

//READ
app.get("/users", async (req: express.Request, res: express.Response) => {

    const users = await prisma.person.findMany();

    res.json(users);
});

//CREATE
app.put("/create/users",
    schema,
    validatorResultMiddleware,
    async (req: express.Request, res: express.Response) => {
        const newUser = req.body;

        const users = await prisma.person.create({
            data: newUser
        });

        res.status(201).json(users);
    });


//RETRIEVE A RESOURCE

app.get("/find/users/:id",
    param("id").toInt().isInt({ min: 1 }),
    validatorResultMiddleware,
    async (req: express.Request, res: express.Response) => {

        const idUser = req.params.id;

        console.log(idUser);

        const users = await prisma.person.findUnique({
            where: { id: idUser }
        });

        res.json(users);
    });

export default app;
