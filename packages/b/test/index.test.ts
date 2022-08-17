import { b } from ".."

describe('b', () => {
  it('b', () => {
    expect(b()).toBe('ab');
    expect(b(true)).toBe('AB');
  })
})