package javaProblems.codewars;

public class GrasshopperSummation {
    public static int summation(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(summation(2));
        System.out.println(summation(8));
    }
}