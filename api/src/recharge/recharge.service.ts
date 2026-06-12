import { Injectable, Inject } from '@nestjs/common';
import {
  CreateRechargeRequestDto,
  UpdateRechargeRequestDto,
} from './dto/recharge.dto';
import type { RechargeRepository } from './recharge.repository';
import { Prisma, Recharge } from '../../prisma/generated';

// Interfaces pour typer les données
interface TimeDuration {
  minutes: number;
  hours: number;
}

interface PeakAndOffPeakResult {
  offPeakHour: TimeDuration;
  fullHour: TimeDuration;
}

// Constantes pour les tarifs (évite les propriétés de classe)
const TARIFS = {
  KWH: 1.8,
  HP: 0.1249, // Heures pleines
  HC: 0.0872, // Heures creuses
  TVA: 1.2,
};

@Injectable()
export class RechargeService {
  constructor(
    @Inject('RechargeRepository')
    private readonly repository: RechargeRepository,
  ) {}

  // Méthode publique pour créer une recharge
  async create(createRechargeDto: CreateRechargeRequestDto): Promise<Recharge> {
    const startAt =
      createRechargeDto.startAt instanceof Date
        ? createRechargeDto.startAt
        : new Date(createRechargeDto.startAt);
    const endAt =
      createRechargeDto.endAt instanceof Date
        ? createRechargeDto.endAt
        : new Date(createRechargeDto.endAt);

    console.log('Received DTO:', createRechargeDto);

    const durations = this.calculatePeakAndOffPeakDurations(startAt, endAt);
    const totalCost = this.calculateTotalCost(durations);

    const rechargeEntity: Prisma.RechargeCreateInput = {
      createdAt: new Date(),
      startAt,
      endAt,
      offPeakHour: durations.offPeakHour.hours,
      fullHour: durations.fullHour.hours,
      totalCost,
    };

    const result = await this.repository.save(rechargeEntity);

    return result;
  }

  // Méthode pour vérifier si une date est en heures creuses
  private isOffPeakHour(date: Date): boolean {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return (
      (hour === 23 && minutes >= 10) ||
      hour < 7 ||
      (hour === 7 && minutes <= 10)
    );
  }

  // Calcule la durée en heures pleines et creuses
  private calculatePeakAndOffPeakDurations(
    startDate: Date,
    endDate: Date,
  ): PeakAndOffPeakResult {
    const oneMinute = 60 * 1000;
    let current = new Date(startDate.getTime());
    let offPeakMinutes = 0;
    let peakMinutes = 0;

    while (current < endDate) {
      if (this.isOffPeakHour(current)) {
        offPeakMinutes++;
      } else {
        peakMinutes++;
      }
      current = new Date(current.getTime() + oneMinute);
    }

    return {
      offPeakHour: {
        minutes: offPeakMinutes,
        hours: Number((offPeakMinutes / 60).toFixed(2)),
      },
      fullHour: {
        minutes: peakMinutes,
        hours: Number((peakMinutes / 60).toFixed(2)),
      },
    };
  }

  // Calcule le coût total
  private calculateTotalCost(durations: PeakAndOffPeakResult): number {
    const { offPeakHour, fullHour } = durations;
    const totalHC = offPeakHour.hours * TARIFS.KWH * TARIFS.HC * TARIFS.TVA;
    const totalHP = fullHour.hours * TARIFS.KWH * TARIFS.HP * TARIFS.TVA;
    return totalHC + totalHP;
  }

  findAll() {
    // return this.repository.findAll();
    return `This action returns all recharge`;
  }

  findOne(id: number) {
    // return this.repository.findOne(id);
    return `This action returns a #${id} recharge`;
  }

  update(id: number, updateRechargeDto: UpdateRechargeRequestDto) {
    // return this.repository.update(id, updateRechargeDto);
    return `This action updates a #${id} recharge`;
  }

  remove(id: number) {
    // return this.repository.remove(id);
    return `This action removes a #${id} recharge`;
  }
}
