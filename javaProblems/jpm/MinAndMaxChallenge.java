package javaProblems.jpm;
import java.util.Scanner;

public class MinAndMaxChallenge {
   public static void showMinAndMax() {
       Scanner sc = new Scanner(System.in);
       boolean looping = true;
       double minNumber = Double.MAX_VALUE;
       double maxNumber = -Double.MAX_VALUE;
       while (looping == true) {
           System.out.println("Please enter a number, or enter a character to quit.");
           try {
               double num = Double.parseDouble(sc.nextLine());
               if (num < minNumber) {
                   minNumber = num;
               }
               if (num > maxNumber) {
                   maxNumber = num;
               }
               System.out.println("The minimum number is " + minNumber);
               System.out.println("The maximum number is " + maxNumber);
           } catch (Exception e) {
               looping = false;
           }
       }
   }

    public static void main(String[] args) {
        showMinAndMax();
    }
}