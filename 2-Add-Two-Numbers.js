/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let newNode = new ListNode()
    let count = 0
    let curr = newNode
    while (l1 || l2 || count) {
        let val = (l1?.val || 0) + (l2?.val || 0) + count;
        count = Math.floor(val / 10)
        curr.next = new ListNode(val % 10)
        curr = curr.next
        l1 = l1?.next
        l2 = l2?.next
    }
    return newNode.next
};