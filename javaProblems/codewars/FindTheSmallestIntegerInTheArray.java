package javaProblems.codewars;

import java.util.Arrays;

public class FindTheSmallestIntegerInTheArray {
    public static int findSmallestInt(int[] args) {
        Arrays.sort(args);
        return args[0];
    }

    public static void main(String[] args) {
        System.out.println(findSmallestInt(new int[]{34, 15, 88, 2}));
        System.out.println(findSmallestInt(new int[]{34, -345, -1, 100, 34565}));
    }
}