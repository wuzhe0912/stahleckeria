// 函數參數為物件時的型別宣告方式
const plus = ({value, subValue}: {
  value: number,
  subValue: number,
}): number => {
  return value + subValue;
};

const all = plus({ value: 9, subValue: 13 });
console.log(all);


// 當物件只有一個屬性時的寫法
const getNumber = ({ value }: { value: number }): number => {
  return value;
};
const one = getNumber({ value: 17 });
console.log(one);


// Array 單一型別宣告
const numberArray = [2, 3, 4];
const stringArray = ['1', 'io', 'car'];

// 若 Array 中有多個型別，則寫法如下：
const arr: (number | string)[] = [10, 'string', 20];


// type alias 類型別名，使用 type 宣告型別
type game = { name: string, age: number };

const player: game[] = [
  { name: 'Pitt', age: 32 },
  { name: 'Min', age: 30 }
];
console.log(player);

// class 宣告類型別名寫法
class classPlayer {
  name: string;
  age: number;
}

const playerObject: classPlayer[] = [
  { name: 'Pitt2', age: 22 },
  { name: 'Min2', age: 20 },
];
console.log(playerObject);