package javaProblems.leetcode;

class FindIndexOfFirstOccurenceInAString28 {
    public int strStr(String haystack, String needle) {
        outer: for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            System.out.println(i);
            for (int j = i; j < needle.length(); j++) {
                System.out.println(i + " " + j);
                char[] haystackChars = haystack.toCharArray();
                char[] needleChars = needle.toCharArray();
                if (!(haystackChars[j] == (needleChars[j]))) {
                    System.out.println("continue");
                    continue outer;
                }
            }
            return i;
        }
        return -1;
    }
}