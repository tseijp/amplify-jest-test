import a from "../";

describe('a', () => {
  it('a', () => {
    expect(a()).toBe('a');
    expect(a(true)).toBe('A');
  })
})