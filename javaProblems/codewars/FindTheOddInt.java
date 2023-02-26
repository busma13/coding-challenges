package javaProblems.codewars;

import java.util.HashMap;

public class FindTheOddInt {
    public static int FindOdd(int[] a) {
        HashMap<Integer, Integer> map = new HashMap<>(a.length);
        for (int n: a) {
            if (map.get(n) == null) {
                map.put(n, 1);
            } else {
                int count = map.get(n);
                count++;
                map.put(n, count);
            }
        }
        for (HashMap.Entry<Integer, Integer> entry: map.entrySet()) {
            if (entry.getValue() % 2 != 0) return (int) entry.getKey();
        };
        return a[0];
    }
    public static void main(String[] args) {
        System.out.println(FindOdd(new int[] {7}));
        System.out.println(FindOdd(new int[] {0}));
        System.out.println(FindOdd(new int[] {1,1,2}));
        System.out.println(FindOdd(new int[] {0,1,0,1,0}));
        System.out.println(FindOdd(new int[] {1,2,2,3,3,3,4,3,3,3,2,2,1}));
    }
}