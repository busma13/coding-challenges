/* 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

Parameters: Two arrays of numbers.  Either list can be empty. Values of nodes are between -100 and 100 inclusive.  Numbers are sorted in ascending order.
Returns: Head of the merged linked list.
Examples: see above.
Pseudo code: Create a result node and set it equal to a value outside the bounds of Node.val.  Create a temp variable that is equla to result. Create a while loop that will stop if either list.next gets to null (end of list).  Compare list1.val to list2.val. Whichever one is less gets added to temp.next as a ListNode.  Then result is set to temp.next.  When the while loop ends(we reached the end of one of the lists) We add the current node of the list with items still in it as temp.next.  Then we return result.next (The first node after the fake head we started with).
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var mergeTwoLists = function(list1, list2) {
    let result = new ListNode(-101)
    let temp = result
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            temp.next = new ListNode(list1.val)
            list1 =list1.next
        } else {
            temp.next = new ListNode(list2.val)
            list2 = list2.next
        }
        temp = temp.next
    }
    if (list1 != null) {
        temp.next = list1
    }
    if (list2 != null) {
        temp.next = list2
    }
    return result.next
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))