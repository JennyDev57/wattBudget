import { Injectable } from '@nestjs/common';
import { RechargeRepository } from './recharge.repository';
import prisma from '../lib/prisma';
import { Prisma, Recharge } from '@prisma/client';

// type RechargeEntity = Prisma.RechargeGetPayload<{}>;

@Injectable()
export class AdapterRechargeRepository implements RechargeRepository {
  async save(rechargeData: Prisma.RechargeCreateInput): Promise<Recharge> {
    const result = await prisma.recharge.create({
      data: {
        createdAt: new Date(),
        startAt: rechargeData.startAt,
        endAt: rechargeData.endAt,
        fullHour: rechargeData.fullHour,
        offPeakHour: rechargeData.offPeakHour,
        totalCost: rechargeData.totalCost,
      },
    });

    return result;
  }

  async findAll(): Promise<Recharge[]> {
    return await prisma.recharge.findMany();
  }

  async findOne(id: number): Promise<Recharge | null> {
    return await prisma.recharge.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    rechargeData: Prisma.RechargeUpdateInput,
  ): Promise<Recharge> {
    return await prisma.recharge.update({
      where: { id },
      data: rechargeData,
    });
  }

  async remove(id: number): Promise<Recharge> {
    return await prisma.recharge.delete({
      where: { id },
    });
  }
}
