import { Prisma, Recharge } from '@prisma/client';

export interface RechargeRepository {
  save(recharge: Prisma.RechargeCreateInput): Promise<Recharge>;
  findAll(): Promise<Recharge[]>;
  findOne(id: number): Promise<Recharge | null>;
  update(
    id: number,
    rechargeData: Prisma.RechargeUpdateInput,
  ): Promise<Recharge>;
  remove(id: number): Promise<Recharge>;
}
