import { Injectable, Inject } from '@nestjs/common';
import {
  CreateRechargeRequestDto,
  UpdateRechargeRequestDto,
} from './dto/recharge.dto';
import type { RechargeRepository } from './recharge.repository';
import { Recharge } from '@prisma/client';

import { RechargeCalculators } from './calculators/recharge-calculator';

@Injectable()
export class RechargeService {
  constructor(
    @Inject('RechargeRepository')
    private readonly repository: RechargeRepository,
  ) {}

  // Méthode publique pour créer une recharge
  async create(dto: CreateRechargeRequestDto): Promise<Recharge> {
    const startAt = new Date(dto.startAt);
    const endAt = new Date(dto.endAt);

    const durations = RechargeCalculators.calculateDurations(startAt, endAt);
    const totalCost = RechargeCalculators.calculateTotalCost(durations);

    return this.repository.save({
      createdAt: new Date(),
      startAt,
      endAt,
      offPeakHour: durations.offPeakHour.hours,
      fullHour: durations.fullHour.hours,
      totalCost,
    });
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateRechargeDto: UpdateRechargeRequestDto) {
    // return this.repository.update(id, updateRechargeDto);
    return `This action updates a #${id} recharge`;
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
