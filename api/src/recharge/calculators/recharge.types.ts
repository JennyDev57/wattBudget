// Interfaces pour typer les données
export interface TimeDuration {
  minutes: number;
  hours: number;
}

export interface PeakAndOffPeakResult {
  offPeakHour: TimeDuration;
  fullHour: TimeDuration;
}
