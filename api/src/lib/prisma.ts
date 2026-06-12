import 'dotenv/config';
import { PrismaClient } from '../../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

// const connectionString =
//   process.env.DATABASE_PRISMA_URL ?? process.env.DATABASE_URL ?? '';

const connectionString =
  process.env.DATABASE_URL ?? process.env.DATABASE_PRISMA_URL;

const adapter = new PrismaPg({
  connectionString,
});

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
