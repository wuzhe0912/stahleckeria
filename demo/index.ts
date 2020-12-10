// 宣告 array 中為 number 型別
let numArray: number[] = [1, 2, 3];
numArray.push(4);
console.log(numArray);

// 元組，用更嚴謹的方式定義，包含型別和長度
let user: [number, string, number] = [10, 'kio', 4];
// 但可以透過陣列操作 api 來改變陣列中的值，不過依然限制使用宣告的型別
user.push('uio');
console.log(user);

// interface 描述對象的形狀
// 使用宣告的 interface 時，必須保持資料數量和型別一致
interface Player {
  readonly id: number, // readonly 限制僅能讀取，不能指派
  name: string,
  age: number,
  job: string,
}

let pitt: Player = {
  id: 1,
  name: 'pitt',
  age: 29,
  job: 'warrior',
}

// function
// 添加 ? 為可選選項
const marge = (val: number, subVal: number, item?: number): number => {
  if (typeof item === 'number') {
    return val + subVal + item
  } else {
    return val + subVal + subVal
  }
}

// use interface 聲明 function 的型別
interface IPlus {
  (val: number, subVal: number, item?: number): number
}
let plus: IPlus = marge;

// TypeScript 本身會自動推測型別，被稱為 Type inference
let a = 1;
let b = 'string';

// union types 聯合型別，可以指派複數型別
let numberOrString: number | string;
