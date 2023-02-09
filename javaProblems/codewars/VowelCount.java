package javaProblems.codewars;

public class VowelCount {
    
    public static int getCount(String str) {
        int count = 0;
        int[] charCodes = {97,101,105,111,117};
        for(int c: str.toCharArray()) {
            for(int vowel: charCodes) {
                if (c == vowel) {
                    count += 1;
                }
            }
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(getCount("aeiou"));
        System.out.println(getCount("hello world"));
        System.out.println(getCount("bbbbb"));
        System.out.println(getCount("electric eels"));
    }
}