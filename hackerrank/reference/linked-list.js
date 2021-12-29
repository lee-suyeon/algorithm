class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

const n1 = new Node(100);
console.log(n1); // { data: 100, next: null }

class LinkedList {
	constructor() {
		this.head = null; // empty list
		this.size = 0; // list length
	}

	// 첫번째 노드 삽입
	insertFirst(data) {
		this.data = new Node(data, this.head); 
		this.size++;
	}

	// 마지막 노드 삽입
	insertLast(data) {
		let node = new Node(data);
		let current;

		// If empty, make head
		if(!this.head) {
			this.head = node;
		} else {
			current = this.head;
			
			while(current.next) {
				current = current.next;
			}
			
			current.next = node;
		}

		this.size++;
	}
	// 노드 삽입
	insertAt(data, index) {
		// If index is out of range
		if(index > 0 && index > index.size) {
			return; 
		}

		// if first index
		if(index === 0) {
			this.insertFirst(data);
			return;
		}

		const node = new Node(data);
		let current, previous;

		// Set current to first
		current = this.head;
		let count = 0;
		
		while(count < index) {
			previous = current; // Node before index
			count++;
			current = current.next; // Node after index
		}

		node.next = current; 
		previous.next = node;

		this.size++;
	}

	// 값 없기 
	getAt(index) {
		let current = this.head;
		let count = 0;

		while(current) {
			if(count == index) {
				console.log(current.data);
			}
			count++;
			current = current.next;
		}
		return null;
	}

	// 삭제
	removeAt(index) {
		if(index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;
			
		// Remove first
		if(index == 0) {
			this.head = current.next;
		} else {
			while(count < index){
				count++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}
		this.size--;
	}

	// clear
	clearList() {
		this.head = null;
		this.size = 0; 
	}

	// print
	printList() {
		let current = this.head; // 현재 노드를 가리킴

		while(current) {
      console.log(current.data);
      current = current.next;
		}
	}
}

const list = new LinkedList();

list.insertFirst(100);
console.log(list); // { head: Node { data: 100, next: null }, size: 0 }

list.insertFirst(200);
console.log(list); // { head: Node { data: 200, next: Node { data: 100, next: null } }, size: 0}

// list.printList(); // 200, 100

// list.insertLast(300); 
// list.printList(); // 200, 100, 300

// list.insertAt(400, 2);
// list.printList(); // 200, 100, 400, 300
