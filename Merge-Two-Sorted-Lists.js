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
var mergeTwoLists = function (list1, list2) {
    /**
    Idea:
        - 2 sorted lists, return a new merged list of both them

    Edge Cases:
        - both are empty, one of them is empty, list of any length > 2 containing the same number (inserting)

    Approach:
        - first to handle the edge cases.
            a. if both empty return empty list
            b. if one is empty return the second list
            c. if one list of any length > 2 containing the same number, check the number compared to the other list and insert the list in that position (spreaded)


        - away from edge cases. 
            * itterate over the two lists, two pointers
                one ptr on the head of the l1, second ptr is on the head of l2
                compare both of the values the ptrs are pointing at, based on the comarasion result push the min value into the list containing the mins, if both are equal, push both. and keep itterating.

                l1 = [1, 2, 3]                  l2 = [3, 4, 5]
    */

    const isRepeatedList = (head) => {
        if (!head || !head.next || !head.next.next) return false
        let val = head.val
        let current = head.next
        while (current) {
            if (current.val !== val) return false
            current = current.next
        }
        return true
    }


    if (!list1 && !list2) return null

    if (!list1) return list2
    if (!list2) return list1

    if (isRepeatedList(list1)) return insertRepeatedInto(list1, list2)

    if (isRepeatedList(list2)) return insertRepeatedInto(list2, list1)


    let dummy = new ListNode(-1)
    let current = dummy

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else if (list2.val < list1.val) {
            current.next = list2
            list2 = list2.next
        } else {
            current.next = list1
            list1 = list1.next
            current = current.next
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    current.next = list1 || list2
    return dummy.next
};


function insertRepeatedInto(repeated, other) {
    let repVal = repeated.val
    let dummy = new ListNode(-1, other)
    let prev = dummy
    let current = other

    while (current && current.val < repVal) {
        prev = current
        current = current.next
    }

    prev.next = repeated

    while (repeated.next) repeated = repeated.next


    repeated.next = current
    return dummy.next
}