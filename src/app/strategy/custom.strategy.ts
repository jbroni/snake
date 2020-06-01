import * as _ from 'lodash';
import {Context, Position, SnakeDirection} from './context';

import {Strategy} from './strategy';

interface Node {
  g: number; // Total cost to reach node
  h: number; // Estimated time to reach finish from this node (heuristic)
  f: number; // g + h
  parent: Node | undefined;
  position: Position;
  isObstacle: boolean;
}

export class CustomStrategy implements Strategy {
    private grid: Node[][];
    private GRID_WIDTH = 18;
    private GRID_HEIGHT = 18;

    step(context: Context): SnakeDirection {
      this.initializeEmptyGrid();
      this.placeObstacles(context);

      const snakeHead = context.snake.parts[0];
      const start = this.grid[snakeHead.x][snakeHead.y];
      const end = this.grid[context.fruit.x][context.fruit.y];

      let nextNode = this.search(start, end);

      if (!nextNode) {
        const neighbors = this.getNeighbors(start);
        nextNode = _.find(neighbors, neighbor => !neighbor.isObstacle);
      }

      if (nextNode) {
        return this.getDirection(start, nextNode);
      }

      return context.snake.direction;
    }

    private initializeEmptyGrid(): void {
      this.grid = [];

      for (let x = 0; x < this.GRID_WIDTH; x++) {
        this.grid.push([]);
      }

      for (let x = 0; x < this.GRID_WIDTH; x++) {
        for (let y = 0; y < this.GRID_HEIGHT; y++) {
          this.grid[x][y] = {
            g: 0,
            h: 0,
            f: 0,
            parent: undefined,
            position: {
              x,
              y
            },
            isObstacle: false
          };
        }
      }
    }

    private placeObstacles(context: Context): void {
      context.obstacles.forEach(obstacle => {
        this.grid[obstacle.x][obstacle.y].isObstacle = true;
      });
      context.snake.parts.forEach(snake => {
        this.grid[snake.x][snake.y].isObstacle = true;
      });
    }

    private search(start: Node, end: Node): Node | undefined {
      const openList: Node[] = [];
      const closedList: Node[] = [];

      // Set start position
      openList.push(start);

      // Find lowest f(x) to process
      let currentNode: Node;
      while (openList.length > 0) {
        currentNode = _.minBy(openList, node => node.f);

        // End case - trace path, return node to move to
        if (isSamePosition(currentNode.position, end.position)) {
          let current = currentNode;
          const path = [];
          while (current.parent) {
            path.push(current);
            current = current.parent;
          }
          return _.last(path);
        }

        // Main case - move currentNode from open to closed, process neighbors
        _.pull(openList, currentNode);
        closedList.push(currentNode);
        const neighbors = this.getNeighbors(currentNode);

        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i];
          const isClosed = !!_.find(closedList, closed => isSamePosition(closed.position, neighbor.position));

          if (isClosed || neighbor.isObstacle) {
            continue;
          }

          // Check if path is shortest one yet
          const gScore = currentNode.g + 1;
          let gScoreIsBest = false;

          const openNode = _.find(openList, open => isSamePosition(open.position, neighbor.position));
          if (!openNode) {
            // First time we visit this node
            gScoreIsBest = true;
            neighbor.h = heuristic(neighbor.position, end.position);
            openList.push(neighbor);
          } else if (gScore < neighbor.g) {
            // Better gScore than last time node was visited
            gScoreIsBest = true;
          }

          if (gScoreIsBest) {
            // Best path to this node so far
            neighbor.parent = currentNode;
            neighbor.g = gScore;
            neighbor.f = neighbor.g + neighbor.h;
          }
        }
      }

      // No possible path found
      return undefined;
    }

    private getNeighbors(node: Node): Node[] {
      const x = node.position.x;
      const y = node.position.y;

      const left = x === 0 ? this.GRID_WIDTH - 1 : x - 1;
      const right = x === this.GRID_WIDTH - 1 ? 0 : x + 1;
      const up = y === 0 ? this.GRID_HEIGHT - 1 : y - 1;
      const down = y === this.GRID_HEIGHT - 1 ? 0 : y + 1;

      return [
        this.grid[left][y],
        this.grid[right][y],
        this.grid[x][up],
        this.grid[x][down]
      ];
    }

    private getDirection(from: Node, to: Node): SnakeDirection {
      const fromX = from.position.x;
      const fromY = from.position.y;
      const toX = to.position.x;
      const toY = to.position.y;

      if ((fromX === 0 && toX === this.GRID_WIDTH - 1) || fromX - 1 === toX) {
        return SnakeDirection.left
      }
      if ((fromX === this.GRID_WIDTH - 1 && toX === 0) || fromX + 1 === toX) {
        return SnakeDirection.right
      }
      if ((fromY === 0 && toY === this.GRID_HEIGHT - 1) || fromY - 1 === toY) {
        return SnakeDirection.up
      }
      return SnakeDirection.down;
    }

}

function isSamePosition(a: Position, b: Position): boolean {
  return a.x === b.x && a.y === b.y;
}

function heuristic(a: Position, b: Position): number {
  // Simple Manhattan distance
  return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
}
