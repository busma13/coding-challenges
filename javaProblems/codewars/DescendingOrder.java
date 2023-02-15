package javaProblems.codewars;

import java.util.Arrays;
import java.util.Collections;

public class DescendingOrder {
    public static int sortDesc(final int num) {
        Character[] digitArray = Integer.toString(num).chars().mapToObj(c -> (char) c).toArray(Character[]::new);
        Arrays.sort(digitArray, Collections.reverseOrder());
        String digitStr = "";
        for (Character c: digitArray) {
            digitStr += c;
        }
        int sortedNum = Integer.parseInt(digitStr);
        return sortedNum;
    }

    public static void main(String[] args) {
        System.out.println(sortDesc(42145));
        System.out.println(sortDesc(145263));
        System.out.println(sortDesc(123456789));
    }
}