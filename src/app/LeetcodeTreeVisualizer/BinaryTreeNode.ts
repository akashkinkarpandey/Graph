export class BinaryTreeNode {
    /**
     * The value stored in the node. Can be null if the node is empty.
     */
    value: number | null = null;
  
    /**
     * Reference to the left child node of the current node. Can be null if there's no left child.
     */
    left: BinaryTreeNode | null = null;
  
    /**
     * Reference to the right child node of the current node. Can be null if there's no right child.
     */
    right: BinaryTreeNode | null = null;
  
    /**
     * Creates a new BinaryTreeNode instance.
     * 
     * @param value The value to store in the node. Can be null for an empty node.
     */
    constructor(value: number | null) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    /**
     * Sets the left child node of the current node.
     * 
     * @param node The BinaryTreeNode to be set as the left child.
     */
    setLeft(node: BinaryTreeNode) {
      this.left = node;
    }
  
    /**
     * Sets the right child node of the current node.
     * 
     * @param node The BinaryTreeNode to be set as the right child.
     */
    setRight(node: BinaryTreeNode) {
      this.right = node;
    }
  
    /**
     * Calculates the height of the binary tree rooted at the current node.
     * 
     * Height is defined as the maximum number of edges from the root node to the farthest leaf node.
     * 
     * @returns The height of the binary tree.
     */
    getHeight(): number {
      // Finding the height of the left and right subtrees recursively
      const leftHeight = this.left?.getHeight() || 0;
      const rightHeight = this.right?.getHeight()! || 0;
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  