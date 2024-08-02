function knightMoves(start, end) {
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];
  
  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
  
  const bfs = (start, end) => {
    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      let [current, path] = queue.shift();
      
      if (current[0] === end[0] && current[1] === end[1]) {
        return path;
      }
      
      for (let [dx, dy] of directions) {
        let x = current[0] + dx;
        let y = current[1] + dy;
        let nextMove = [x, y];
        
        if (isValid(x, y) && !visited.has(nextMove.toString())) {
          visited.add(nextMove.toString());
          queue.push([nextMove, path.concat([nextMove])]);
        }
      }
    }
  }
  
  return bfs(start, end);
}

console.log(knightMoves([0, 0], [1, 2])); // [[0, 0], [1, 2]]
console.log(knightMoves([0, 0], [3, 3])); // Output will vary
console.log(knightMoves([3, 3], [4, 3])); // Output will vary
