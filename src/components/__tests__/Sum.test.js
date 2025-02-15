import sum from '../Sum'

test('tests addition function', () => {
  const result = sum(2,3);

  // Assertion 
  expect(result).toBe(5);
})