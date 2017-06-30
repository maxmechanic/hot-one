import test from 'ava';
import * as hotOne from '../dist';

test('is as hot as a hot one', t => {
  const isHotOne = hotOne.isHotOne(106);
  t.true(isHotOne);
});

test('is hotter than a hot one', t => {
  const isHotOne = hotOne.isHotOne(107);
  t.true(isHotOne);
});

test('is a not hot one', t => {
  const isHotOne = hotOne.isHotOne(105.9);
  t.false(isHotOne);
});

test('7 inches from the midday sun', t => {
  const inchesFromSun = hotOne.inchesFromMiddaySun(106);
  t.deepEqual(inchesFromSun, 7);
});

test('is hotter than 7 inches from the midday sun, therefore closer to the midday sun', t => {
  const inchesFromSun = hotOne.inchesFromMiddaySun(107);
  t.true(inchesFromSun < 7);
});

test('is cooler than 7 inches from the midday sun, therefore farther from the midday sun', t => {
  const inchesFromSun = hotOne.inchesFromMiddaySun(105);
  t.true(inchesFromSun > 7);
});
