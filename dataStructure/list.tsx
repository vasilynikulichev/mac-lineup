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

class List {
    #head;

    constructor() {
        this.#head = null;
    }

    add(item) {
        this.#head = {
            data: item,
            next: this.#head,
        }
        return this;
    }

    print() {
        for (let current = this.#head; current !== null; current = current.next) {
            console.log(current.data);
        }
    }
}

const l = new List;

l.add(1).add(2).add(3).add(4).add(5).add(6).add(7);

l.print();


// методы массива
// reduce, every, some, map(mutable), filter(mutable), sort,
// поиск подстроки в строке