import test from 'ava';
import {justLikeTheOcean} from '../dist/ocean';

test('the atlantic ocean is just like the ocean', t => {
  t.true(justLikeTheOcean(41, -41));
});

test('spanish harlem is not just like the ocean', t => {
  t.false(justLikeTheOcean(40.797325, -73.938515));
});