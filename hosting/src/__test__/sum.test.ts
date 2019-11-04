import {sum} from "../sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('adds 1 + 1 not to equal 3', () => {
  expect(sum(1, 1)).not.toBe(3);
})

test('adds 2 + 2 not to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
})