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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        const newNode = new TreeNode(val);
        newNode.left = root;
        return newNode;
    }
    
    dfs(root, 1);
    return root;

    function dfs(node, curDepth) {
        if (!node) return;

        if (curDepth === depth - 1) {
            const leftNode = new TreeNode(val);
            leftNode.left = node.left;
            node.left = leftNode;

            const rightNode = new TreeNode(val);
            rightNode.right = node.right;
            node.right = rightNode;
        } else {
            dfs(node.left, curDepth + 1);
            dfs(node.right, curDepth + 1);
        }
    }
};