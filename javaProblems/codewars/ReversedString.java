package javaProblems.codewars;

public class ReversedString {
    public static String solution(String str) {
        char[] chars = str.toCharArray();
        String reversedString = "";
        for(char ch: chars) {
            reversedString = ch + reversedString;
        }
        return reversedString;
    }
    
    public static void main(String[] args) {
        System.out.println(solution("world"));
        System.out.println(solution("word"));
    }
}

// return new StringBuilder(str).reverse().toString();
// return new StringBuffer(str).reverse().toString();

// import org.apache.commons.lang3.*;
// return StringUtils.reverse(str);