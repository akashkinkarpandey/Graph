export const graph = {
  A: ['B', 'C', 'D'],
  B: ['J', 'K', 'L'],
  C: ['E', 'F'],
  D: ['M', 'N', 'O'],
  E: ['W', 'X'],
  F: ['G', 'H', 'I'],
  M: [],
  N: [],
  O: [],
  J: [],
  K: [],
  L: [],
  W: [],
  X: [],
  G: [],
  H: [],
  I: [],
}

export default function* bfs(graph, start, end) {
  const queue = [start]
  const visited = {}
  visited[start] = true

  while (queue.length) {
    const node = queue.shift()

    yield {
      current: node,
      children: graph[node],
      visited: visited,
      found: node === end,
    }

    if (node === end) return true

    const neighbors = graph[node]
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]
      if (!visited[neighbor]) {
        visited[neighbor] = true
        queue.push(neighbor)
      }
    }
  }
  return false
}
