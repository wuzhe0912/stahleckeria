// type annotation 類型註解
/*
  先聲明 newCount 的型別，並定義為 number 類型
  指派 newCount 的值為 10
*/
let newCount: number;
newCount = 10;

// type inference，typescript 會自動推斷型別
let countInference = 20;

const one = 10;
const two = 22;
const three = one + two; // 透過前兩者是 number 型別，判斷 three 同樣為 number


// 當函數接收傳來的值時，有時會無法得知拿到的資料型別，因此我們在接收參數的地方宣告型別
const getTotal = (val: number, subVal: number) => {
  return val + subVal;
};
const total = getTotal(1, 2);
console.log(total);

// 當 typescript 可以自行判斷型別時，任其自行判斷，反之，則需加上註釋
// 上面的函數沒有針對 return 的值進行嚴謹判斷，因此若拿到 string 並不會提示錯誤，可改寫為如下：
const newGetTotal = (val: number, subVal: number): number => {
  return val + subVal
}
const newTotal = newGetTotal(2, 7);
console.log(newTotal);

// 若沒有 return 的值，則添加 void，此時填寫 return 反而會被報錯
const sayHi = (): void => {
  console.log('Hello Demo');
};