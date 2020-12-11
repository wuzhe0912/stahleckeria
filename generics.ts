function echo<T>(arg: T): T {
  return arg
}

const result = echo(false)

function swap<T, U>(tuple: [T, U]): [T, U] {
  return [tuple[0], tuple[1]]
}

const result2 = swap(['string', 10]);
let a = result2[0];
let b = result2[1];

// 約束泛型，傳入包含 length 屬性的參數
function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
let array = echoWithArray(['string', 'player']);

// 聲明屬性類型，再透過繼承讓泛型受約束
interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength('string')
const obj = echoWithLength({ length: 20, label: 'string' })
const arr2 = echoWithLength([10, 20])