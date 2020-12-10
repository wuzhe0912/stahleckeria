const getLength = (input: number | string): number => {
  // 類型斷言
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const num = input as number;
    return num.toString().length;
  }
}

let test = getLength('abc');
console.log(test);

// type guard
const getLength2 = (input: number | string): number => {
  if (typeof input === 'string') {
    return input.length;
  } else {
    return input.toString().length;
  }
}

let test2 = getLength(10250);
console.log(test2);