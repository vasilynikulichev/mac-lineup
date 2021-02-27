interface List<T> extends Iterable<T> {
    unshift(value: T): number;
    reverse(): this;
    filter(cb: (value: T, index: number) => boolean): LinkedList<T>;
    map<K>(cb: (value: T, index: number) => K): LinkedList<K>
    reduce<K>(cb: (acc: K, curr: T, index: number) => K, initialValue: K): K
}

interface IListNode<X> {
    value: X;
    next: IListNode<X>;
}

class LinkedList<T> implements List<T> {
    private head: IListNode<T> = null;
    private size = 0;

    unshift(value: T): number {
        this.head = {
            value,
            next: this.head,
        };
        this.size++;

        return this.size;
    }

    [Symbol.iterator]() {
        let node = this.head;

        return {
            next: () => {
                if (node === null) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            
                const { value, next } = node;
                node = next;

                return {
                    value,
                    done: false,
                };
            },
        };
    }

    reverse() {
        let prev: IListNode<T> = null;
        let node: IListNode<T> = this.head;

        while (node) {
            let next = node.next;
    
            node.next = prev;
            prev = node;
            node = next;
        }

        this.head = prev;

        return this;
    }

    filter(cb: (value: T, index: number) => boolean): LinkedList<T> {
        const newList = new LinkedList<T>();
        let index: number = 0;

        for (let node = this.head; node !== null; node = node.next) {
            if (cb(node.value, index)) {
                newList.unshift(node.value);
            }
            index++;
        }

        return newList.reverse();
    }

    map<K>(cb: (value: T, index: number) => K): LinkedList<K> {
        return this.reduce((acc, value, index) => {
            acc.unshift(cb(value, index));
            return acc;
        }, new LinkedList<K>());
    }

    reduce<K>(cb: (acc: K, curr: T, index: number) => K, initialValue: K): K {
        let acc = initialValue;
        let index = 0;

        for (let node = this.head; node !== null; node = node.next) {
            acc = cb(acc, node.value, index);
            index++;
        }

        return acc;
    }
}

const l: List<number> = new Array<number>();

l.unshift(1)
l.unshift(2)
l.unshift(3)
l.unshift(4)

// const { next } = l[Symbol.iterator]();

// next();
// { value: 4, done: false }
// { value: 3, done: false }
// { value: 2, done: false }
// { value: 1, done: false }
// { value: undefined, done: true }

// for(const x of l) {
//   console.log(x);
// }
// console.log(Array.from(l))

// l.reverse();

// console.log(Array.from(l))

const l2 = l.filter(x => x === 5);

console.log(Array.from(l2))

// переделать в двусвязный список
// at(index: number): T -- получение по индексу
// delete(index)
// filter/every/some через reduce
// push()
// pop()
// shift()
// slice()
// // mutableConcat()
// l1 = 1 → 2 → 3      l2 = 6 → 7 → 8
// l1.mutableConcat(l2) === l1
// l1 ===1 → 2 → 3 → 6 → 7 → 8
// hasCycle(): boolean /// O(1) по памяти