package javaProblems.codewars;

public class SquareDigit {

    public static int squareDigits(int n) {
        String resultString = "";
        while (n > 0) {
            int lastDigit = n % 10;
            int squaredDigit = lastDigit*lastDigit;
            n /= 10;
            resultString = Integer.toString(squaredDigit) + resultString;
        }
        return Integer.parseInt(resultString);
    }
  
    public static void main(String[] args) {
        System.out.println(squareDigits(9119));    
        System.out.println(squareDigits(765));    
    }

  }