exports.Node = function(data){
    this.data = data;
    this.children = [];
}

exports.traverseDFS = (root) => {
    const out = [];
    const stack = [];
    stack.unshift(root); // add from front
    while(stack.length > 0){
        const node = stack.shift(); // remove from front
        out.push(node.data);
        stack.unshift(...node.children); // add children to front
    }
    console.log(out.join("->"));
}

exports.traverseBFS = (root) => {
    const out = [];
    const queue = [];
    queue.push(root); // add from back
    while(queue.length > 0){
        const node = queue.shift(); // remove from front
        out.push(node.data);
        queue.push(...node.children); // add children to back
    }
    console.log(out.join("->"));
}