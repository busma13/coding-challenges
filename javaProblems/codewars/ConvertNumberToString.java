package javaProblems.codewars;

public class ConvertNumberToString {
    public static String numberToString(int num) {
        return Integer.toString(num);
        // return String.valueOf(num);
        // return ""+num;
    }

    public static void main(String[] args) {
        System.out.println(numberToString(0));
        System.out.println(numberToString(1));
        System.out.println(numberToString(-4));
        System.out.println(numberToString(-124));
        System.out.println(numberToString(2354987));
    }
}