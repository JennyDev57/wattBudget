import { Prisma, Recharge } from 'prisma/generated';

export interface RechargeRepository {
  save(recharge: Prisma.RechargeCreateInput): Promise<Recharge>;
}
