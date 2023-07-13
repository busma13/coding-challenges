const powerOf4 = require('./powerOf4.ts')

describe('When testing numbers that are a power of 4', () => {
  it('should return true', () => {
    expect(powerOf4(256)).toBe(true)
    expect(powerOf4(1024)).toBe(true)
    expect(powerOf4(4)).toBe(true)
    expect(powerOf4(1)).toBe(true)
  })
})

describe('When testing numbers that are not a power of 4', () => {
  it('should return false', () => {
    expect(powerOf4(51)).toBe(false)
    expect(powerOf4(1025)).toBe(false)
    expect(powerOf4(0)).toBe(false)
  })
})

describe('When testing input that is not a number', () => {
  it('should return false', () => {
    expect(powerOf4('51')).toBe(false)
    expect(powerOf4(true)).toBe(false)
    expect(powerOf4({ first: 5, second: 'hello' })).toBe(false)
  })
})
