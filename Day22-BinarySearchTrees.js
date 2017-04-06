if(!root) return -1;
var leftDepth = this.getHeight(root.left);
var rightDepth = this.getHeight(root.right);

return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
