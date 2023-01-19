import express from "express";
import "express-async-errors";
import cors from "cors"

import { PrismaClient } from "@prisma/client";

import validatorResultMiddleware from "./lib/middleware/validator"
import schema from "./lib/schema/schema";
import { param } from "express-validator";
import multer from "multer";

const prisma = new PrismaClient();

const app = express();

const upload = multer({ dest: 'uploads/' })

app.use(express.json())

app.use(cors({
    origin: "http://localhost:8080"
}))

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

        const idUser = Number(req.params.id);


        const users = await prisma.person.findUnique({
            where: { id: idUser }
        });

        res.json(users);
    });

//UPDATE A RESOURCE
app.patch("/update/users/:id",
    param("id").toInt().isInt({ min: 1 }),
    schema,
    validatorResultMiddleware,
    async (req: express.Request, res: express.Response) => {

        const idUser = Number(req.params.id);
        const dataUser = req.body;

        const users = await prisma.person.update({
            where: { id: idUser },
            data: dataUser
        });

        res.json(users);
    });


//delete

app.delete("/delete/users/:id",
    param("id").toInt().isInt({ min: 1 }),
    validatorResultMiddleware,
    async (req: express.Request, res: express.Response) => {

        const idUser = Number(req.params.id);

        await prisma.person.delete({
            where: { id: idUser }
        });

        res.json({ msg: "utente eliminato" });
    });



app.post("/file",
    upload.single("file"),
    (req: express.Request, res: express.Response) => {
        console.log(req.file);
        res.json(req.file)
    });

export default app;
