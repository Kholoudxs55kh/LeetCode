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
var sumNumbers = function(root) {
    if (!root) return;
    if (!root.left && !root.right) return root.val;

    let res = 0;
    let dfs = (r, path) => {
        if (!r) return;
        if (!r.left && !r.right) {
            res += path * 10 + r.val;
            return;
        }
        dfs(r.right, path * 10 + r.val);
        dfs(r.left, path * 10 + r.val);
    };
    
    dfs(root, 0);
    return res;
};