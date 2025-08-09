import { PrismaClient } from "@prisma/client";

// Prevent creating multiple PrismaClient instances in dev
export const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
