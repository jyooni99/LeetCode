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
 
var inorderTraversal = function(root) {
    let answer = [];
    inorder(root);
    function inorder(root){
        if (root === null) return;
        inorder(root.left);
        answer.push(root.val);
        inorder(root.right);
    }
    return answer;
};