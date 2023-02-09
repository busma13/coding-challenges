package javaProblems.projectEuler;

import java.io.File;
import java.util.Arrays;
import java.util.Scanner;

/* Large sum

Problem 13

Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
*/

class Problem13LargeSum {
    public static void main(String[] args) {
        int[][] numbers = new int[100][50];
        // convert file input to 2D array
        try {
            Scanner input = new Scanner(new File("./javaProblems/projectEuler/Problem13.txt"));
            int i = 0;
            while (input.hasNextLine()) {
                String nextLine = input.nextLine();
                // System.out.println("line: " + nextLine);
                for (int j = 0; j < nextLine.length(); j++) {
                    numbers[i][j] = Integer.parseInt(nextLine.substring(j, j+1));
                }
                i++;   
            }

            input.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        String sum = "";
        int carryAmt = 0;
        for (int col = 49; col >= 0; col--) {
            int colSum = 0;
            for (int row = 0; row < 100; row++) {
                colSum += numbers[row][col];
            }
            colSum += carryAmt;
            carryAmt = colSum / 10;
            int remainder = colSum % 10;
            sum = Integer.toString(remainder) + sum;
        }
        sum = Integer.toString(carryAmt) + sum;
        System.out.println(sum.toString().substring(0,10));
    }
}