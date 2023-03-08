package javaProblems;

import java.util.Arrays;

public class Fib {
    public static int[] fibonacci(int count) throws IllegalArgumentException {
    	if (count < 0) throw new IllegalArgumentException();
   	if (count == 0) return new int[] {};
    	if (count == 1) return new int[] {1};
    	if (count == 2) return new int[] {1, 1};
    	int[] sequence = new int[count];
    	sequence[0] = 1;
    	sequence[1] = 1;
    	for (int i = 2; i < count; i++) {
    		sequence[i] = sequence[i-1] + sequence[i-2];
    	}
    	return sequence;
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(fibonacci(0)));
        System.out.println(Arrays.toString(fibonacci(1)));
        System.out.println(Arrays.toString(fibonacci(2)));
        System.out.println(Arrays.toString(fibonacci(3)));
        System.out.println(Arrays.toString(fibonacci(20)));
    }
}