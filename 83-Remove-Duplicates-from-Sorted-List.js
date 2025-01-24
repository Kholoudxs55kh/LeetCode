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
var deleteDuplicates = function(head) {
    /**

    Idea: 
        1. delete all duplicates 'val'
        2. keep linked list sorted

    Edge cases: 
        1. if linked list is empty or have one node, return the linked list

    Approach:
        1. create a new linked list
        2. compare bettween the new and head vals until head is null
        3. if it does not match put new next to the head, go to next in head
        4. to 2
        5. retur the new linked list

    */
    if (!head || !head.next) return head

    let curr = head
    while (curr.next) {
        if (curr.val === curr.next.val) curr.next = curr.next.next
        else curr = curr.next
    }

    return head
};