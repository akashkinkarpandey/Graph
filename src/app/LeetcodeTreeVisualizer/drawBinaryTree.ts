// import { BinaryTreeNode } from "./BinaryTreeNode.ts";
import {
  getRequiredHeightAndWidth,
  DEFAULT_CONFIG,
  drawNode,
  connectEdges,
  treeConstructor,
} from "./treeUtils.js";

const canvas:any = document.querySelector("canvas");

function drawBinaryTree(root:any, canvasElement:any) {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;
    console.log({maxWidth, maxHeight});
  // Initialze the canvas dimensions
  canvasElement.width = maxWidth;
  canvasElement.height = maxHeight;

  // Calc req. width & ht. to draw the tree structure
  const { requiredCanvasWidth, requiredCanvasHeight } =
    getRequiredHeightAndWidth(root);

  const windowWidthCenter = maxWidth / 2;
  const requiredWidthCenter = requiredCanvasWidth / 2;

  const xStart = windowWidthCenter - requiredWidthCenter;
  const xEnd = windowWidthCenter + requiredWidthCenter;

  const horizontalConfig = { xStart, xEnd };

  // Draw
  recursivelyDrawNodes(root, canvasElement, 0.5, horizontalConfig);
}

// Algo:
// 1. Find root node coordinates
// 2. Draw root circle
// 3. Recursively draw left & right nodes
// 4. Connect edges of root with left & right nodes
function recursivelyDrawNodes(
  root:any,
  canvasElement:any,
  currentLine:any,
  horizontalConfig:any
) {
  const { xStart, xEnd } = horizontalConfig;

  const xPos = (xStart + xEnd) / 2;
  const yPos = currentLine * DEFAULT_CONFIG.nodeHeightSpacing;

  drawNode(root.value, canvasElement, xPos, yPos);

  if (root.left !== null) {
    const leftNodeHorizontalConfig = { xStart, xEnd: xPos };
    recursivelyDrawNodes(
      root.left,
      canvasElement,
      currentLine + 1,
      leftNodeHorizontalConfig
    );

    connectEdges(
      canvasElement,
      {
        xStart: xPos,
        xEnd: (xStart + xPos) / 2,
      },
      {
        yStart: yPos + DEFAULT_CONFIG.radius,
        yEnd:
          (currentLine + 1) * DEFAULT_CONFIG.nodeHeightSpacing -
          DEFAULT_CONFIG.radius,
      }
    );
  }

  if (root.right !== null) {
    const rightNodeHorizontalConfig = { xStart: xPos, xEnd };
    recursivelyDrawNodes(
      root.right,
      canvasElement,
      currentLine + 1,
      rightNodeHorizontalConfig
    );

    connectEdges(
      canvasElement,
      {
        xStart: xPos,
        xEnd: (xPos + xEnd) / 2,
      },
      {
        yStart: yPos + DEFAULT_CONFIG.radius,
        yEnd:
          (currentLine + 1) * DEFAULT_CONFIG.nodeHeightSpacing -
          DEFAULT_CONFIG.radius,
      }
    );
  }
}

let prevValue = "";
export function init(value:any) {
  prevValue = value;
  console.log('entering init');
  
  clearCanvas();

  const root = treeConstructor(value);
  drawBinaryTree(root, canvas);
}

function clearCanvas() {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

const textarea:any = document.querySelector("textarea");
console.log(textarea);
const applyBtn = document.querySelector("#applyBtn");
const clearBtn = document.querySelector("#clearBtn");

applyBtn?.addEventListener("click", () => {
  console.log('applyBtn clicked');
  
  if (textarea?.value === "") return;

  init(textarea?.value);
});

clearBtn?.addEventListener("click", () => {
  console.log('clearBtn clicked');
  textarea.value = "";
  clearCanvas();
});

window.addEventListener("resize", () => init(prevValue));
