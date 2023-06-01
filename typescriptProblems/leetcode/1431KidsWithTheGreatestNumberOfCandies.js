function kidsWithCandies(candies, extraCandies) {
    var result = [];
    var highest = 0;
    for (var _i = 0, candies_1 = candies; _i < candies_1.length; _i++) {
        var candyCount = candies_1[_i];
        if (candyCount > highest) {
            highest = candyCount;
        }
    }
    for (var _a = 0, candies_2 = candies; _a < candies_2.length; _a++) {
        var candyCount = candies_2[_a];
        var bool = (candyCount + extraCandies) >= highest;
        result.push(bool);
    }
    return result;
}

console.log(kidsWithCandies([2,3,5,1,3], 3))
