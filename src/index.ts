import justLikeTheOceanUnderTheMoon from './ocean';
export {justLikeTheOceanUnderTheMoon};

const HOTTEST_TEMP = 106.0;
const inchPerTemp = 7 / HOTTEST_TEMP;

export type TemperatureScale =
  | 'F'
  | 'C'
  | 'K'

export function isHotOne(temperature: number, scale: TemperatureScale = 'F'): boolean {
  const convertedTemp = convertToF(temperature, scale);
  return convertedTemp >= HOTTEST_TEMP
}

export function inchesFromMiddaySun(temperature: number, scale: TemperatureScale = 'F'): number {
  const convertedTemp = convertToF(temperature, scale);
  const tempDiff = HOTTEST_TEMP - temperature;
  return 7 + (tempDiff * inchPerTemp);
}

function convertToF(temperature: number, fromScale: TemperatureScale): number {
  switch (fromScale) {
    case 'F':
      return temperature;
    case 'C':
      return cToF(temperature);
    case 'K':
      return kToF(temperature);
    default:
      throw new Error('Not a valid temperature scale.');
  }
}

function kToF(temp: number): number {
  return (temp + 273.15 - 32) / 1.8;
}

function cToF(temp: number): number {
  return (temp * 1.8) + 32;
}
