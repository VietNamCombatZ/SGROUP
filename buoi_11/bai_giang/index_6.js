const arr1 = [1,2,3];
const arr2 = [4, 5,6];

const test = [true, false];
const combinedArray = [...arr1, ...arr2,...['a', test]];



test[0] = false;

console.log(combinedArray);

/* spread chỉ copy nông lớp đầu, còn các lớp sau chỉ copy địa chỉ phần tử 
nên phần tử test[0] thay đổi thì phần tử tét[0]đó trong combinedArray cx thay đổi */

const arr3 = [1, 2, 3];


const combinedArray2 = [...arr3];

arr3[1] = 4;

console.log(combinedArray2);

/* vì spread copy lớp đầu nên  nó copy mảng arr3 sau khi phá lúc đầu, 
khi đó phần tử arr3[1] thay đổi cx ko ảnh hưởng đến arr3 trong combinedArray2*/