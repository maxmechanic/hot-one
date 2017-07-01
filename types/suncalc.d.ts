declare module "suncalc" {
  interface MoonTimes {
    rise: Date;
    set: Date;
    alwaysUp: boolean;
    alwaysDown: boolean;
  }

  export function getMoonTimes(date: Date, latitude: number, longitude: number, inUTC?: boolean): MoonTimes;

  interface MoonIllumination {
    fraction: number;
    phase: number;
    angle: number;
  }

  export function getMoonIllumination(date: Date): MoonIllumination;
}