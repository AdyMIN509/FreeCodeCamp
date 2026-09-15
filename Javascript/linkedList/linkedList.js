class singleLinkedList {
	constructor(){
		this.head = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length === 0;
	}
	add(element) {
		if(this.isEmpty()) {
			this.head = {
				element: element,
				next: null,
			};
		} else {
			let current = this.head;
			while(current.next !== null) {
				current = current.next;
			}
			current.next = {
				element: element,
				next: null,
			};
		}
		this.length += 1;
	}

	remove(element) {
		let previous = null;
		let current = this.head;

		while(current.next !== null  && current.element !== element){
			previous = current;
			current = current.next;
			}
		
		if (previous !== null) {
			previous.next = current.next;
		} else {
			this.head = current.next;
		}
		this.length--;
	}
	printList() {
		if (this.isEmpty()) {
			console.log("The linkedList is empty!");
			return;
		}
		let current = this.head;
		let out = [];
		while(current.next !== null) {
			out.push(current.element);
			current = current.next;
		}
		out.push(current.element);
		console.log(out.join(" -> "))
	}
}

const linkedList =new singleLinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.printList();
linkedList.remove(5);
linkedList.printList();
linkedList.remove(2);
linkedList.printList();