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
var doubleIt = function(head) {
    let curr = head; 
    let digits = [];
    let carry = 0;
    let newHead = null; 
    let tail = null; 

    while (curr) {
        digits.push(curr.val);
        curr = curr.next;
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        carry += 2 * digits[i]; 
        digits[i] = carry % 10;
        carry = Math.trunc(carry / 10); 
    }
    if (carry) digits.unshift(carry);

    for (let value of digits) {
        curr = new ListNode(value); 
        if (newHead) {
            tail.next = curr; 
            tail = tail.next; 
        } 
        else tail = newHead = curr;
    }

    return newHead; 
};