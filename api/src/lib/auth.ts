import { betterAuth } from 'better-auth';
import { openAPI } from 'better-auth/plugins';
import { prismaAdapter } from 'better-auth/adapters/prisma';

import prisma from './prisma';

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:5000',
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  trustedOrigins: ['http://localhost:5000'],
  plugins: [openAPI()],
  user: {
    modelName: 'user',
  },
  session: {
    modelName: 'user_sessions',
  },
  account: {
    modelName: 'user_account',
  },
  verification: {
    modelName: 'user_verification',
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});
