package javaProblems.mosh;

import java.util.Scanner;
import java.text.NumberFormat;

public class MortgageCalculator {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		try {
			int MONTHS_IN_YEAR = 12;
			int PERCENT = 100;
			int period;
			double annualInterestRate;
			double principal;
	
			while (true) {
				System.out.print("Principal ($1K - $1M): ");
				principal = scanner.nextDouble();
				if (principal >= 1000.0 && principal <= 1_000_000) break;
				System.out.println("Enter a number between 1,000 and 1,000,000.");
			}
			
			while (true) {
				System.out.print("Annual Interest Rate: ");
				annualInterestRate = scanner.nextDouble();
				if (annualInterestRate > 0 && annualInterestRate <= 30) break;
				System.out.println("Enter a value greater than 0 and less than or equal to 30.");
			}
			
			while (true) {
				System.out.print("Period (Years): ");
				period = scanner.nextInt();
				if (period > 0 && period <= 30) break;
				System.out.println("Enter a value between 1 and 30.");
			}
	
			double monthlyRateDecimal = annualInterestRate / MONTHS_IN_YEAR / PERCENT;
			int numberOfPayments = period * 12;
			String mortgageString = calculateMortgage(principal, monthlyRateDecimal, numberOfPayments);
			System.out.print("Mortgage: " + mortgageString);
		} catch (Exception e) {
			System.out.println(e);
		} finally {			
			scanner.close();
		}
	}

	private static String calculateMortgage(double P, double r, int n) {
		double mortgage = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
		return NumberFormat.getCurrencyInstance().format(mortgage);
	}
}
