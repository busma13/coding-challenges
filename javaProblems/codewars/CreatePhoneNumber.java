package javaProblems.codewars;

public class CreatePhoneNumber {
    public static String createPhoneNumber(int[] numbers) {
        String phoneNumberString = "(";
        for(int n = 0; n < numbers.length; n++) {
            if (n == 3) {
                phoneNumberString += ") ";
            }
            if (n == 6) {
                phoneNumberString += "-";
            }
            phoneNumberString += numbers[n];
        }
        return phoneNumberString;
    }

    public static void main(String[] args) {
        System.out.println(createPhoneNumber(new int[] {1,2,3,4,5,6,7,8,9,0}));
    }
}

// return String.format("(%d%d%d) %d%d%d-%d%d%d%d",numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6],numbers[7],numbers[8],numbers[9]);
// return String.format("(%d%d%d) %d%d%d-%d%d%d%d", java.util.stream.IntStream.of(numbers).boxed().toArray());