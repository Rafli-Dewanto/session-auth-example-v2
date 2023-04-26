import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const users = [
        {
            name: "Alice",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Bob",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Alex",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Julia",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "John",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Beck",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Paco",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Gavin",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Minnie",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
        {
            name: "Mario",
            password:
                "$2a$10$iQYWzqldWWU7pEjd0/DcJ.Z6rdA0XiCU2u.49GqNIlv8s5TQgaLAe",
        },
    ];

    for (const user of users) {
        await prisma.user.create({
            data: user,
        });
    }
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
