import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export async function login(req: Request, res: Response) {
    const data = {
        ...req.body,
    };

    try {
        // user -> id, name, password
        const user = await prisma.user.findFirst({
            where: {
                name: data.name,
            },
        });

        if (!user) {
            res.status(404).json({
                message: "invalid username or password",
            });
        }

        const match = await bcrypt.compare(data.password, user!.password);

        if (!match)
            res.status(401).json({
                message: "invalid username or password",
            });

        req.session.userId = user!.id;
        
        res.status(200).json({
            message: "login success",
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export async function logout(_req: Request, res: Response) {
    res.clearCookie("sid", { httpOnly: true });
    res.status(200).json({
        message: "logout success",
    });
}
