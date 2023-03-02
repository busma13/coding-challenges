package javaProblems.jpm;

public class SecondsAndMinutesChallenge {
    public static String getDurationString (int seconds) {
        if (seconds < 0) {
            return "Seconds must be positive.";
        }
        int minutes = seconds / 60;
        int remainingSeconds = seconds % 60;
        return getDurationString(minutes, remainingSeconds);
    }

    public static String getDurationString (int minutes, int seconds) {
        if (minutes < 0) {
            return "Minutes must be positive or 0.";
        } else if (seconds < 0 || seconds > 59) {
            return "Seconds must be between 0 and 59.";
        }
        int hours = minutes / 60;
        int remainingMinutes = minutes % 60;
        return (String.format("%dh %dm %ds", hours, remainingMinutes, seconds));
    }
    public static void main(String[] args) {
        System.out.println(getDurationString(5000));
        System.out.println(getDurationString(121, 35));
        System.out.println(getDurationString(0));
        System.out.println(getDurationString(-10, 4));
        System.out.println(getDurationString(10, 60));
        System.out.println(getDurationString(10, -1));

    }
}