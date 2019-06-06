'use strict';
const {Stack} = require('./Stack');

class _Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function peek(q) {
    console.log(q.first.value);
}

function display(q) {
    let current = q.first;
    while(current) {
        console.log(current.value);
        current = current.next;
    }
}

class StackQueue {
    constructor() {
        this.firstStack = new Stack;
        this.lastStack = new Stack;
    }
    enqueue(value) {
        this.firstStack.push(value)
    }
    dequeue() {
        while (this.firstStack.top) {
            this.lastStack.push(this.firstStack.pop());
        }
        const result = this.lastStack.pop()
        while (this.lastStack.top) {
            this.firstStack.push(this.lastStack.pop())
        }
        console.log(result);
    }
}

function main() {
    const starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    display(starTrekQ);
}

main();