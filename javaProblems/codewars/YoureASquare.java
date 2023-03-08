package javaProblems.codewars;

public class YoureASquare {
    public static boolean isSquare(int n) {        
        return Math.sqrt(n) % 1 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isSquare(-1));
        System.out.println(isSquare(0));
        System.out.println(isSquare(3));
        System.out.println(isSquare(4));
        System.out.println(isSquare(25));
        System.out.println(isSquare(26));
    }
}