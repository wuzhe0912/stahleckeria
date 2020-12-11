class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(9.42)
console.log('before', queue);
console.log(queue.pop().toFixed());
console.log('after', queue);

// 聲明型別
interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<string, number> = { key: 'string', value: 2 }
let kp2: KeyPair<number, boolean> = { key: 1, value: true }