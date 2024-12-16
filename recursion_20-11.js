/* 1. Deep Object Traversal
Write a recursive function to traverse a deeply nested object and modify or retrieve values
 based on a condition.
const obj = {
  a: {
    b: {
      c: 1,
      d: {
        e: 2,
      },
    },
  },
  f: 3,
};
 
expected:
c: 1
e: 2
f: 3

function NestedObj(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            NestedObj(obj[key]);
        } else {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


const obj = {
    a: {
        b: {
            c: 1,
            d: {
                e: 2,
            },
        },
    },
    f: 3,
};

NestedObj(obj);

output:
c: 1
e: 2
f: 3

*/



////////////////////
/*
2.Generate Combinations
Generate all possible combinations of elements in an array.
const elements = [1, 2, 3];
expected:
[[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
 

function possibleCombinations(array) {
    const result = [];

    function inner(index, current) {
        if (index === array.length) {
            result.push([...current]);
            return;
        }

        inner(index + 1, current);

        current.push(array[index]);
        inner(index + 1, current);

        current.pop();
    }

    inner(0, []);
    return result;
}

const elements = [1, 2, 3];
const combinations = possibleCombinations(elements);
console.log(combinations);

output:
[
    [],       [ 3 ],
    [ 2 ],    [ 2, 3 ],
    [ 1 ],    [ 1, 3 ],
    [ 1, 2 ], [ 1, 2, 3 ]
  ]
  */

/* 
/////////////////////////////////////////////
3.Path Finder in a Maze
Write a recursive function to find a path through a 2D maze.
 
const maze = [
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 1],
];
 
expected:
[[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]]



function findPath(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  const path = [];

  function traverse(row, col) {
    if (row < 0 || col < 0 || row >= rows || col >= cols || maze[row][col] === 0) {
      return false;
    }

    path.push([row, col]);

    if (row === rows - 1 && col === cols - 1) {
      return true;
    }

    maze[row][col] = 0;

    if (traverse(row + 1, col) || traverse(row, col + 1)) {
      return true;
    }

    path.pop();
    return false;
  }

  if (traverse(0, 0)) {
    return path;
  } else {
    return []; 
  }
}

const maze = [
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 1],
];

const result = findPath(maze);
console.log(result);
*/


/*
//////////////////////////////////////////////
4.Generate Permutations
Generate all permutations of a given string.
 
console.log(generatePermutations("abc"));
expected:["abc", "acb", "bac", "bca", "cab", "cba"]


function generatePermutations(str) {
  const results = [];

  function permute(current, remaining) {
    if (remaining.length === 0) {
      results.push(current); 
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current + remaining[i];
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(newCurrent, newRemaining); 
    }
  }

  permute("", str); 
  return results;
}

console.log(generatePermutations("abc"));

*/

/* 
////////////////////////////////////////////
5. Calculate Factorials Without Loops


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; 
  }
  return n * factorial(n - 1); 
}


console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(3)); // Output: 6

/*
////////////////////////////////
6. Build a Directory Structure
 
const paths = [
  "root/folder1/file1",
  "root/folder1/file2",
  "root/folder2/file3",
  "root/folder2/subfolder1/file4",
];
 
expected:
{
  "root": {
    "folder1": {
      "file1": {},
      "file2": {}
    },
    "folder2": {
      "file3": {},
      "subfolder1": {
        "file4": {}
      }
    }
  }
}
 

/////////////////////////////////////////////
7. Compare Two Nested Structures
const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 2 }, c: 3 };
 
expected: true
*/
const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 2 }, c: 3 }; 
 
if (obj1 !== obj2) {
  console.log('true')
} else {
  console.log(false)
}

/*//////////////////////////////////
8.Serialize Tree to Array
const tree = {
  id: 1,
  children: [
    {
      id: 2,
      children: [{ id: 4, children: [] }],
    },
    {
      id: 3,
      children: [],
    },
  ],
};
 
expected :
[
  { id: 1, parent: null },
  { id: 2, parent: 1 },
  { id: 4, parent: 2 },
  { id: 3, parent: 1 }
] */