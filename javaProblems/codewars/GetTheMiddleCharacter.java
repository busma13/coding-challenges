package javaProblems.codewars;

public class GetTheMiddleCharacter {
    public static String getMiddle(String word) {
        if (word.length() % 2 == 0) {
            int idx = word.length()/2;
            return word.substring(idx - 1, idx + 1);
        } else {
            int idx = (word.length() - 1) / 2;
            return word.substring(idx, idx + 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(getMiddle("test"));
        System.out.println(getMiddle("testing"));
        System.out.println(getMiddle("middle"));
        System.out.println(getMiddle("A"));
    }
}