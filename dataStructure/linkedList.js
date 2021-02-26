class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    unshift(value) {
        const node = new LinkedListNode(value, this.head);
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    push(value) {
        let node = new LinkedListNode(value);

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;

            return this;
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }

        if (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let node = this.head;
        if (node !== null) {
            while (node.next) {
                if (node.next.value === value) {
                    node.next = node.next.next;
                } else {
                    node = node.next;
                }
            }
        }
    }

    print() {
        for (let node = this.head; node !== null; node = node.next) {
            console.log(node.value);
        }
    }

    some(func) {
        for (let node = this.head; node !== null; node = node.next) {
            if (func(node.value)) {
                return true;
            }
        }
        return false;
    }

    every(func) {
        for (let node = this.head; node !== null; node = node.next) {
            if (!func(node.value)) {
                return false;
            }
        }
        return true;
    }

    map(func) {
        let newList = new LinkedList();
        let index = 0;

        for (let node = this.head; node !== null; node = node.next) {
            newList.push(func(node.value, index, this.head));
            index++;
        }

        return newList;
    }

    mapMutable(func) {
        for (let node = this.head; node !== null; node = node.next) {
            node.value = func(node.value);
        }

        return this;
    }

    filter(func) {
        let newList = new LinkedList();
        let index = 0;

        for (let node = this.head; node !== null; node = node.next) {
            if (func(node.value, index, this.head)) {
                newList.push(node.value);
            }
            index++;
        }

        return newList;
    }

    filterMutable(func) {
        for (let node = this.head; node !== null; node = node.next) {
            if (!func(node.value)) {
                this.remove(node.value);
            }
        }
    }

    reduce(func, initialValue) {
        let acc = initialValue !== undefined ? initialValue : this.head.value;
        let node = initialValue !== undefined ? this.head : this.head.next;
        let index = 0;

        while (node) {
            acc = func(acc, node.value, index, this.head);
            node = node.next;
            index++;
        }

        return acc;
    }
}

const linkedList = new LinkedList;

linkedList.unshift(1).unshift(2).unshift(3).unshift(4).unshift(5).unshift(6).unshift(7);

// linkedList.print();

// console.log(linkedList.some((item) => item <= 1));
// console.log(linkedList.every((item) => item >= 1));


// linkedList.map((item) => item * 2).print();

// linkedList.mapMutable((item) => item * 2);
// linkedList.print();


// linkedList.filter((item) => item % 2 === 0).print();

// linkedList.filterMutable((item) => item % 2 === 0);
// linkedList.print();


// console.log(linkedList.reduce((acc, curr) => acc + curr));


