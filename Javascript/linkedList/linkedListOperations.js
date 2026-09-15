function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
	let current = list.head;

	while (current !== null) {
		if (current.element === element) {
			return true
		} else {
			current = current.next;
		}
	}
	return false;
}

function getAt(list, index) {
	if (list.length === 0){
		return undefined;
	}
	let count = 0;
	let current = list.head;

	while (count < index && current.next !== null) {
		current = current.next;
		count++;
	}

	if (count === index) {
		return current.element;
	} else {
		return undefined;
	}
}

function insertAt(list, index, element) {
	if (list.length === 0) {
    if (index === 0){
      list.head = {
        element: element,
        next: null
      };
      list.length++;
	  return;
    }
  };
	let count = 0;
	let previous = null;
	let current = list.head;

	while(current != null & count < index) {
		previous = current;
		current = current.next;
		count++;
	}
	if (count === index){
		if(previous === null) {
			list.head = {
			element: element,
			next: current,
		};
		} else {
			previous.next = {
				element: element,
				next: current,
			}
		}
		list.length++;
	}
}


function removeAt(list, index) {
	if (list.length === 0) return;
	let current = list.head;
	let previous = null;
	let count = 0;

	while(count < index && current.next !== null) {
		previous = current;
		current = current.next;
		count++;
	}

	if (count === index) {
		if (previous === null) {
			list.head = current.next;
		} else {
			previous.next = current.next;
		}
		list.length--;
	}
}

function clear(list) {
	while(list.head !== null) {
		remove(list, list.head.element);
	}
}

const linkedList = initList();

insertAt(linkedList,0,'a');