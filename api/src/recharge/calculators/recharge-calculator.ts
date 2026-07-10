import {
  TARIFS,
  OFF_PEAK_TIME_RANGE,
  CHARGING_POWER,
} from './recharge.constants';
import { PeakAndOffPeakResult } from './recharge.types';

export class RechargeCalculators {
  // Calcule la durée en heures pleines et creuses
  static calculateDurations(
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
  static calculateTotalCost(durations: PeakAndOffPeakResult): number {
    // Conversion temps -> énergie consommée
    const offPeakEnergy =
      durations.offPeakHour.hours *
      CHARGING_POWER.POWER *
      CHARGING_POWER.EFFICIENCY;

    const peakEnergy =
      durations.fullHour.hours *
      CHARGING_POWER.POWER *
      CHARGING_POWER.EFFICIENCY;

    const totalHC = offPeakEnergy * TARIFS.HC * TARIFS.TVA;

    const totalHP = peakEnergy * TARIFS.HP * TARIFS.TVA;

    return Number((totalHC + totalHP).toFixed(2));
  }

  // Méthode pour vérifier si une date est en heures creuses
  private static isOffPeakHour(date: Date): boolean {
    const currentMinutes = date.getHours() * 60 + date.getMinutes();

    const startMinutes =
      OFF_PEAK_TIME_RANGE.start.hour * 60 + OFF_PEAK_TIME_RANGE.start.minute;

    const endMinutes =
      OFF_PEAK_TIME_RANGE.end.hour * 60 + OFF_PEAK_TIME_RANGE.end.minute;

    // Cas classique : ex. 12:00 -> 16:00
    if (startMinutes < endMinutes) {
      return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
    }

    // Cas où la plage traverse minuit : ex. 22:00 -> 06:00
    return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
  }
}
