// const list = {
//     data: 1,
//     next: {
//         data: 2,
//         next: {
//             data: 3,
//             next: {
//                 data: 4,
//                 next: {
//                     data: 5,
//                     next: {
//                         data: 6,
//                         next: {
//                             data: 7,
//                             next: {
//                                 data: 8,
//                                 next: null,
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// function print(l) {
//     if (l === null) {
//         return;
//     }

//     console.log(l.data);
//     print(l.next);
// }

// function printReverse(l) {
//     if (l === null) {
//         return;
//     }

//     printReverse(l.next);
//     console.log(l.data);
// }

// print(list);
// printReverse(list);

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class List {
    constructor() {
        this._head = null;
    }

    print() {
        for (let current = this._head; current !== null; current = current.next) {
            console.log(current.data);
        }
    }

    add(item) {
        this._head = {
            data: item,
            next: this._head,
        };

        return this;
    }

    some(func) {
        for (let current = this._head; current !== null; current = current.next) {
            if (func(current.data)) {
                return true;
            }
        }
        return false;
    }

    every(func) {
        for (let current = this._head; current !== null; current = current.next) {
            if (!func(current.data)) {
                return false;
            }
        }
        return true;
    }

    map(func) {

    }

    mapMutable(func) {
        for (let current = this._head; current !== null; current = current.next) {
            current.data = func(current.data);
        }

        return this;
    }

    filter(func) {

    }

    filterMutable(func) {

    }

    reduce() {}
}

const list = new List;

list.add(1).add(2).add(3).add(4).add(5).add(6).add(7);

list.print();

// console.log(list.some((item) => item <= 1));
// console.log(list.every((item) => item >= 1));

// list.map((item) => item * 2);

// list.mapMutable((item) => item * 2);
// list.print();

// list.filter((item) => item % 2 === 0);

// list.filterMutable((item) => item % 2 === 0);
// list.print();
