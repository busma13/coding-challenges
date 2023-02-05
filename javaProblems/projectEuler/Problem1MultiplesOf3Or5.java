package javaProblems.projectEuler;

class Problem1MultiplesOf3Or5 {
    public static void main(String[] args) {
        int endNumber = 1000;
        int sum = 0;
        for (int i = 0; i < endNumber; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }    
        System.out.println(sum);
    }
}

//233168