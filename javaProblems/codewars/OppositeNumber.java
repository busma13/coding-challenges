package javaProblems.codewars;

public class OppositeNumber {
    public static int opposite(int number)
    {
        return -1 * number;
    }

    public static void main(String[] args) {
        System.out.println(opposite(1));
        System.out.println(opposite(14));
        System.out.println(opposite(-34));
    }
}