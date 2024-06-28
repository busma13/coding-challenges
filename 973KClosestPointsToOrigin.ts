/* 973. K Closest Points to Origin
Medium

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Example 1:

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 
Constraints:

1 <= k <= points.length <= 104
-104 <= xi, yi <= 104
*/

function kClosest(points: number[][], k: number): number[][] {
  type PointObject = {
    point: [];
    distance: number;
  };
  const heap = [];

  function fillHeap(points) {
    for (const point of points) {
      const pointObj = {
        point,
        distance: calcDistance(point),
      };
      console.log(pointObj);
      push(heap, pointObj);
    }
  }

  function calcDistance(point: number[]): number {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
  }
  // left 2i + 1
  // right 2i + 2
  // parent floor((i-1)/2)

  function push(heap: Array<PointObject>, newKey: PointObject): void {
    heap.push(newKey);
    let i = heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (heap[i].distance < heap[parent].distance) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  }

  function pop(heap): PointObject {
    const lastIdx = heap.length - 1;
    [heap[0], heap[lastIdx]] = [heap[lastIdx], heap[0]];
    const smallest = heap.pop();

    let i = 0;
    // console.log("leftChildIdx: ", leftChildIdx);
    // console.log("rightChildIdx: ", rightChildIdx);
    while (2 * i + 1 < heap.length) {
      let leftChildIdx = 2 * i + 1;
      let rightChildIdx = 2 * i + 2;
      const leftValue = heap[leftChildIdx].distance;
      const rightValue =
        rightChildIdx < heap.length ? heap[rightChildIdx].distance : Infinity; // may be undefined
      console.log("leftValue: ", leftValue);
      console.log("rightValue: ", rightValue);

      const smallestChildIdx =
        rightValue < leftValue ? rightChildIdx : leftChildIdx;
      console.log("smallestChildIdx: ", smallestChildIdx);
      if (heap[smallestChildIdx].distance < heap[i].distance) {
        console.log(
          `switching ${heap[smallestChildIdx].distance} with ${heap[i].distance}`
        );
        [heap[smallestChildIdx], heap[i]] = [heap[i], heap[smallestChildIdx]];
        i = smallestChildIdx;
      } else {
        break;
      }
    }

    return smallest;
  }

  fillHeap(points);
  console.log(heap);
  const firstKOfHeap: Array<Array<number>> = [];
  for (let i = 0; i < k; i++) {
    firstKOfHeap.push(pop(heap).point);
  }
  return firstKOfHeap;
}

console.log(
  kClosest(
    [
      [-5, 4],
      [-3, 2],
      [0, 1],
      [-3, 7],
      [-2, 0],
      [-4, -6],
      [0, -5],
    ],
    6
  )
);
