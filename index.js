const { Node, traverseDFS, traverseBFS } = require('./setup.js');

// nodes
const A = new Node('A'); // root
const B = new Node('B'); // level 1
const C = new Node('C'); // level 1
const D = new Node('D'); // level 1
const E = new Node('E'); // level 2
const F = new Node('F'); // level 2
const G = new Node('G'); // level 2

// edges
// A => B, C, D
A.children.push(B);
A.children.push(C);
A.children.push(D);

// B => E, F
B.children.push(E);
B.children.push(F);

// D => G
D.children.push(G);

//        A
//      / | \
//     B  C  D
//    / \    \
//   E   F    G
// 
// DFS: A->B->E->F->C->D->G
// BFS: A->B->C->D->E->F->G

// traverse
console.log('DFS Traverse:');
traverseDFS(A);

console.log(''); // new line

console.log('BFS Traverse:');
traverseBFS(A);