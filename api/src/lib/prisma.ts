import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

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
    log: [
      { level: 'query', emit: 'event' },
      { level: 'error', emit: 'event' },
      { level: 'warn', emit: 'event' },
      { level: 'info', emit: 'event' },
    ],
  });

// (prisma as any).$on?.('query', (e: any) => {
//   console.log('SQL:', e.query);
//   console.log('PARAMS:', e.params);
//   console.log('DURATION:', e.duration + 'ms');
// });

// (prisma as any).$on?.('error', (e: any) => {
//   console.log('🔴 ERROR:', e);
// });

// (prisma as any).$on?.('warn', (e: any) => {
//   console.log('🟡 WARN:', e);
// });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
