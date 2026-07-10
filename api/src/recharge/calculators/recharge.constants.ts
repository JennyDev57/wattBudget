// Calcul : Puissance * Durée ( 7kW x 8h )
export const CHARGING_POWER = {
  POWER: amperesToKilowatts(7),
  EFFICIENCY: 0.9,
};

// Constantes pour les tarifs
export const TARIFS = {
  HP: 0.1249, // Heures pleines
  HC: 0.0872, // Heures creuses
  TVA: 1.2,
} as const;

interface Time {
  hour: number;
  minute: number;
}

interface TimeRange {
  start: Time;
  end: Time;
}

export const OFF_PEAK_TIME_RANGE: TimeRange = {
  start: {
    hour: 23,
    minute: 10,
  },
  end: {
    hour: 7,
    minute: 10,
  },
};

type Phase = 'single' | 'three';

function amperesToKilowatts(
  amperes: number,
  voltage = 230,
  phase: Phase = 'single',
): number {
  const watts =
    phase === 'three' ? Math.sqrt(3) * voltage * amperes : voltage * amperes;

  return Number((watts / 1000).toFixed(2));
}
