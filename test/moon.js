import test from 'ava';
import {moonIsVisible, underTheMoon} from '../dist/moon';
import {parse} from 'date-fns';

// useful here: https://www.timeanddate.com/moon/uk/greenwich-city?month=7&year=2017

const greenwichLat = 51.4826;
const greenwichLong = 0.0077;

function makeUTCDate(month, day, hours) {
  const d = new Date(2017, month - 1, day);
  d.setUTCHours(hours, 0, 0, 0);
  return d;
}

// set < rise

test('in greenwich at 12am UTC, on July 9, 2017, the moon is risen', t => {
  t.true(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 9, 0), true));
});

test('in greenwich at 12pm UTC, on July 9, 2017, the moon is set', t => {
  t.false(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 9, 12), true));
});

test('in greenwich at 11pm UTC, on July 9, 2017, the moon is risen', t => {
  t.true(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 9, 23), true));
});

// Date with moonset but no moonrise

test('in greenwich at 12am UTC, on July 17, 2017, the moon is risen', t => {
  t.true(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 17, 0), true));
});

test('in greenwich at 3pm UTC, on July 17, 2017, the moon is set', t => {
  t.false(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 17, 15), true));
});

// rise < set

test('in greenwich at 12am UTC, on July 23, 2017, the moon is set', t => {
  t.false(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 23, 0), true));
});

test('in greenwich at 12pm UTC, on July 23, 2017, the moon is risen', t => {
  t.true(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(7, 23, 12), true));
});

// Date with moonrise but no moonset

test('in greenwich at 12pm UTC, on August 1 2017, the moon is set', t => {
  t.false(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(8, 1, 12), true));
});

test('in greenwich at 5pm UTC, on August 1 2017, the moon is risen', t => {
  t.true(moonIsVisible(greenwichLat, greenwichLong, makeUTCDate(8, 1, 17), true));
});