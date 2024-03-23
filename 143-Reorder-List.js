/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const list = [];
    let curr = head;
    while (curr !== null) {
        list.push(curr.val);
        curr = curr.next;
    }

    curr = head;
    for (let i = 0; i < list.length; i++) {
        if (i % 2 === 0) {
            curr.val = list[Math.floor(i / 2)];
        } else {
            curr.val = list[list.length - Math.floor((i + 1) / 2)];
        }
        curr = curr.next;
    }
};