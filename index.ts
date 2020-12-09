function hello() {
  let web: string = "Hello TypeScript!";
  console.log(web)
}

hello();


// 靜態類型
const count: number = 1;

interface player {
  userName: string;
  age: number;
}

const me: player = {
  userName: 'Pitt',
  age: 32,
}

console.log(me);

const newPlayer: {
  name: string,
  age: number,
} = {
  name: 'Min',
  age: 29
};

console.log(newPlayer.name);


const playerArray: string[] = ['Pitt', 'Min'];
console.log(playerArray);

const playerNumber: number[] = [1, 2, 3];
console.log(playerNumber);

const wife: () => string = () => {
  return 'Min';
}
console.log(wife);

// 指定為 Person 對象
class Person {}
const people: Person = new Person();