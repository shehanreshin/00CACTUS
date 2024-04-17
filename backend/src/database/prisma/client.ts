/*
 * When a Next.js app runs in development mode, it does hot module reloading which reloads the files that
 * were changed, without re-running the server. This is a problem because it tries to constantly create
 * new connections to the prisma client. To prevent this, the singleton design pattern is applied,
 * which can be used to access a single instance of the prisma client throughout the lifetime of the app.
 */

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
