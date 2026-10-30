const { farewell } = require('../src/index');

describe('[feat-3] Farewell', () => {
  test('says goodbye by name', () => {
    expect(farewell('World')).toBe('Goodbye, World!');
  });
});
