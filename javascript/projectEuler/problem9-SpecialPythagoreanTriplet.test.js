const productOfPythagoreanTriplet = require('./problem9-SpecialPythagoreanTriplet')

test('The Pythagorean Triplet with a sum of 12 has a product of 60', ()=>{
    expect(productOfPythagoreanTriplet(12)).toBe(60);
})

test('The Pythagorean Triplet with a sum of 1000 has a product of 31875000', ()=>{
    expect(productOfPythagoreanTriplet(1000)).toBe(31875000);
})
