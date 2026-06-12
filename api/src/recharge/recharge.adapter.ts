import { Injectable } from '@nestjs/common';
import { RechargeRepository } from './recharge.repository';
import prisma from '../lib/prisma';
import { Recharge, Prisma } from '../../prisma/generated';

@Injectable()
export class AdapterRechargeRepository implements RechargeRepository {
  async save(rechargeData: Prisma.RechargeCreateInput): Promise<Recharge> {
    return await prisma.recharge.create({
      data: {
        createdAt: new Date(),
        startAt: rechargeData.startAt,
        endAt: rechargeData.endAt,
        fullHour: rechargeData.fullHour,
        offPeakHour: rechargeData.offPeakHour,
        totalCost: rechargeData.totalCost,
      },
    });
  }
}
