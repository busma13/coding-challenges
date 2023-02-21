package javaProblems.codewars;

public class DisemvowelTrolls {
    public static String disemvowel(String str) {
        System.out.println();
        String newStr = "";
        String vowels = "aeiouAEIOU";
        for (int i = 0; i < str.length(); i++) {
            if (!vowels.contains((str.subSequence(i, i+1)))) {
                newStr += str.charAt(i);
            }
        }
        return newStr;
    }

    public static void main(String[] args) {
        System.out.println(disemvowel("This website is for losers LOL"));
        System.out.println(disemvowel("Look mom, no vowels!"));
    }
}