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
var insertGreatestCommonDivisors = function (head) {
    /**

    idea: find the greatest common divisor of two nodes val

    edge cases: if there is one node return the head

    approach: 
        1. compare each adjacent nodes to find the greatest common divisor of them
        2. add the nodes to the result list node and create a node between them
        3. repeat 1 until the eand of the head
        4. return result

    */

    if (!head || !head.next) return head

    let curr = head

    while (curr && curr.next) {
        let currVal = curr.val, nextVal = curr.next.val

        while (nextVal !== 0) {
            let temp = nextVal
            nextVal = currVal % nextVal
            currVal = temp
        }

        let newNode = new ListNode(currVal, curr.next)
        curr.next = newNode
        curr = newNode.next
    }

    return head
}