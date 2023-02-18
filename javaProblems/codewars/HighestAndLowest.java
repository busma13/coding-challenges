package javaProblems.codewars;

import java.util.Arrays;

public class HighestAndLowest {
    public static String highAndLow(String numbers) {
        String[] strings = numbers.split(" ");
        int[] nums = Arrays.stream(strings).mapToInt(Integer::parseInt).toArray();
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        return nums[nums.length - 1] + " " + nums[0];
    }

    public static void main(String[] args) {
        System.out.println(highAndLow("1 2 3 4 5"));
        System.out.println(highAndLow("1 2 -3 4 5"));
        System.out.println(highAndLow("1 9 3 4 -5"));
        System.out.println(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
    }
}