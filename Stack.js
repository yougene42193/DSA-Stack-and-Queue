'use strict';

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }   
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    if(!stack.top) {
        return;
    }
    else {
        console.log(stack.top.data);
    }
}

function display(stack) {
    let counter = stack.top;
    while(counter) {
        console.log(counter.data);
        counter = counter.next;
    }
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reverse = new Stack();
    for(let i = 0; i < s.length; i++) {
        reverse.push(s.charAt(i));
    }
    for(let j = 0; j < s.length; j++) {
        if(s[j] === reverse.pop()) continue;
        else return false;
    }
    return true;
}

function match(str) {
    let newStack = new Stack();
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            newStack.push(str[i]);
            counter++;
        }
        if(str[i] === ')' && !newStack.top) {
            return new Error (`Missing an open parenthesis at ${counter}`)
        }
        if(str[i] === ')') {
            newStack.pop();
            counter++;
        }
        if(newStack.top === '(') {
            return new Error(`Missing an closing parenthesis at ${counter}`)
        }
    }
    return true;
}

function sort(stack) {
    let sorted = new Stack();
    while(stack.top) {
        let saved = stack.pop();
        while(sorted.top && sorted.top.data > saved) {
            stack.push(sorted.pop());
        }
        sorted.push(saved);
    }
    while(sorted.top) {
        stack.push(sorted.pop())
    }
    return stack;
}

function main() {
    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop();
    starTrek.pop();
    display(starTrek);
}

main();

exports.Stack = Stack;
exports.NODE = _Node;