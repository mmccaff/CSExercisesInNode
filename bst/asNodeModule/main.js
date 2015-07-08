var util = require("util");
var BST = require("./bst.js");

bst = new BST.bst();

bst.insert(4, 'Four');
bst.insert(1, 'One');
bst.insert(9, 'Nine');
bst.insert(7, 'Seven');
bst.insert(8, 'Eight');
bst.insert(12, 'Twelve');

console.log('\n\n---- Tree ----\n\n')
console.log(util.inspect(bst, {showHidden: false, depth: null}));

// can be used to implement a sort
bst.inOrder(bst.root);

console.log ('\nmin: ' + bst.minNode(bst.root));
console.log ('\nmax: ' + bst.maxNode(bst.root));

console.log('\n7 lookup: ' + bst.lookup(7));
console.log('\n9999 (not found) lookup: ' + bst.lookup(9999));
