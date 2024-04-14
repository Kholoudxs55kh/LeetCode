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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    
    function searchLeft (root) {
        if (!root) return 0;
        
        if (!root.left) return searchLeft(root.right)
        
        if (!root.left.left && !root.left.right) {
            sum += root.left.val;
        }
        return searchLeft(root.left) + searchLeft(root.right)
    }
    
    searchLeft(root);
    return sum;
};