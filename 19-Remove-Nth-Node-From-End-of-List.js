/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const stack = [];
    let node = head;
    while (node.next) {
        stack.push(node)
        node = node.next;
    }
    
    for (; n > 1 ; n--) node = stack.pop()
    
    if (!stack.length) return node.next
    
    stack.pop().next = node.next
    
    return head
};