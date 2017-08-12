/// <reference types="../types/suncalc" />

import {getMoonIllumination, getMoonTimes} from 'suncalc';
import {isAfter, isBefore} from 'date-fns';

export function moonIsVisible(lat: number, long: number, date: Date, isUTC: boolean): boolean {
  const times = getMoonTimes(date, lat, long, isUTC);

  // ez short circuit: if the moon is always up or always down that day, whatever
  if (times.alwaysUp) {
    return true;
  } else if (times.alwaysDown) {
    return false;
  }

  // TODO: Holy shit there must be a better way to do this
  if (isAfter(times.rise, times.set)) {
    // If the moonrise on this date is AFTER moonset, we need to make sure the time is either
    // BEFORE both or AFTER both
    if (isBefore(date, times.rise) && isBefore(date, times.set)) {
      return true;
    } else if (isAfter(date, times.rise) && isAfter(date, times.set)) {
      return true;
    } else {
      return false;
    }
  } else {
    // If the moonrise on this date is BEFORE moonset, we just need to make sure the time is
    // between moonrise and moonset
    // (also handles case where rise or set is missing)
    return (!times.set || isBefore(date, times.set)) && (!times.rise || isAfter(date, times.rise));
  }
}

export function moonIsLit(date: Date): boolean {
  return getMoonIllumination(date).fraction > (1 / 3);
}

export function underTheMoon(lat: number, long: number, date: Date = new Date(), isUTC: boolean = true): boolean {
  return moonIsVisible(lat, long, date, isUTC) && moonIsLit(date);
}
