// Head -> [1]->2->3->4->5->6->7->8->9
// Read linkedlist, copy elements to a stack
// Iterate stack, print all values

// Define a Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Create the linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

// Read linked list and copy elements to a stack
let stack = [];
let current = head;
while (current !== null) {
    stack.push(current.value);
    current = current.next;
}

// Iterate stack and print all values
while (stack.length > 0) {
    console.log(stack.pop());
}
