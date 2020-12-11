type PlusType = (x: number, y: number) => number
let sum: PlusType
const result3 = sum(10, 20)

type StringNumber = string | number
let res: StringNumber = 1
res = 'string2'

// 將 interface 進行擴展
interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'get', age: 20 }