/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return [];

    let stack = [root], res = [];

    while (stack.length > 0) {
        let node = stack.pop();
        res.push(node.val);

        if (node.right) stack.push(node.right);

        if (node.left) stack.push(node.left);
    }

    return res;
};