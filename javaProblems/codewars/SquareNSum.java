package javaProblems.codewars;

public class SquareNSum {
    public static int squareSum(int[] n) {
        int sum = 0;
        for (int num: n) {
            sum += num * num;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(squareSum(new int[] {1,2,2}));
        System.out.println(squareSum(new int[] {1,2}));
        System.out.println(squareSum(new int[] {5, -3, 4}));
        System.out.println(squareSum(new int[] {}));
    }
}