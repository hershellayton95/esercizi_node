import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
import { param } from "express-validator";
import multer from "multer";
import { checkAuthorization } from "../lib/middleware/passport";
import validatorResultMiddleware from "../lib/middleware/validator";
import schema from "../lib/schema/schema";

const router = Router();

const prisma = new PrismaClient();
const upload = multer({ dest: 'uploads/' })

//READ
router.get("/users", async (req: express.Request, res: express.Response) => {

    const users = await prisma.person.findMany();

    res.json(users);
});

//CREATE
router.put("/create/users",
    checkAuthorization,
    schema,
    validatorResultMiddleware,
    async (req: express.Request, res: express.Response) => {
        const userData = req.body;
        const username = req.user?.username as string;

        const user = await prisma.person.create({
            data: {
                ...userData,
                //@ts-ignore
                createdBy: username,
                updatedBy: username,
            }
        });

        res.status(201).json(user);
    });


//RETRIEVE A RESOURCE

router.get("/find/users/:id",
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
router.patch("/update/users/:id",
    checkAuthorization,
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

router.delete("/delete/users/:id",
    checkAuthorization,
    param("id").toInt().isInt({ min: 1 }),
    validatorResultMiddleware,
    async (req: express.Request, res: express.Response) => {

        const idUser = Number(req.params.id);

        await prisma.person.delete({
            where: { id: idUser }
        });

        res.json({ msg: "utente eliminato" });
    });



router.post("/file",
    upload.single("file"),
    (req: express.Request, res: express.Response) => {
        console.log(req.file);
        res.json(req.file)
    });

export default router;
