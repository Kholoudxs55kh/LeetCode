/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    /*
    Idea:
        => Remove Duplicates and return the unique ones.
    Edge Cases:
        => The First Elements are duplicate
    Approach:
        1) Two pointers slow, fast
        2) handle the edge case where the duplicates at start.

        my approach:
            check the freq of every val
            remove any duplicated
            keep the unique

    */
    if (!head || !head.next) return head;

    let freq = new Map();
    let curr = head;

    while (curr) {
        freq.set(curr.val, (freq.get(curr.val) || 0) + 1);
        curr = curr.next;
    }

    while (head && freq.get(head.val) > 1) head = head.next

    if (!head) return null

    let prev = head
    curr = head.next

    while (curr) {
        if (freq.get(curr.val) > 1) prev.next = curr.next
        else prev = curr

        curr = curr.next
    }

    return head
};