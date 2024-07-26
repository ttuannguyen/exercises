class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(14);
myLinkedList.append(53);
myLinkedList.append(37);
myLinkedList.prepend(1);
console.log(myLinkedList);

