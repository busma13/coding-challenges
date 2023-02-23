package javaProblems.leetcode;

import java.util.ArrayList;

public class ReverseLinkedList206 {

    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public static ListNode reverseList(ListNode head) {
        if (head == null) {
            return null;
        }
        ArrayList<Integer> values = new ArrayList<Integer>();
        ListNode current = head;
        while (current != null) {
            values.add(current.val);
            current = current.next;
        }

        ListNode newHead = new ListNode();
        current = newHead;
        for (int i = values.size() - 1; i >= 0; i--) {
            current.val = values.get(i);
            if (i > 0) {
                current.next = new ListNode();
                current = current.next;
            }
        }

        return newHead;
    }
}
