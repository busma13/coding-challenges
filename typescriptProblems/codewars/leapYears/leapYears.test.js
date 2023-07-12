const isLeap = require('./leapYears.ts')

describe('When testing years that are not leap years', () => {
  it('should be false', () => {
    expect(isLeap(1955)).toBe(false)
    expect(isLeap(1234)).toBe(false)
    expect(isLeap(2100)).toBe(false)
  })
})

describe('When testing years that are leap years', () => {
  it('should be true', () => {
    expect(isLeap(1996)).toBe(true)
    expect(isLeap(2000)).toBe(true)
  })
})
