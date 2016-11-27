'use strict';

function Node(element) {
    this.element = element;
    this.next = null;
}

function linkedList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display = display;
}

function find(item) {
    var currentNode = this.head; // this refers tp linkedList object
    while (currentNode.element != item) {
        currentNode = currentNode.next;
        console.log(currentNode);
    }
    return currentNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next; // assign existing pointer to new element
    current.next = newNode;
}

function display() {
    var currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== 'head') {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

var cities = new linkedList();
cities.insert('Conway', 'head');
cities.display();
cities.insert('Patna', 'Conway');
cities.display();
cities.insert('Ranchi', 'Patna');
cities.display();
// cities.insert('Delhi', 'Ranchi');
// cities.display();
