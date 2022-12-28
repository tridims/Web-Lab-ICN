import { PrismaClient } from "@prisma/client";
declare let global: { prisma: PrismaClient };

let prisma= new PrismaClient()
global.prisma = new PrismaClient()
prisma = global.prisma

export default prisma