function estimateCallStackDepth(depth = 0) {
  try {
    estimateCallStackDepth(depth + 1);
  } catch(error) {
    return depth;
  }
}

const callStackDepth = estimateCallStackDepth();
console.log("Глубина стека вызовов: " + callStackDepth);