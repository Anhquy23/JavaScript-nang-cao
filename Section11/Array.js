let arr = ['a', 'b', 'c','d', 'e'];

//-----SLICE-----
console.log(arr.slice(2)); // 'c', 'd', 'e'
console.log(arr.slice(2, 4)); // 'c', 'd'
console.log(arr.slice(-2)); // 'd', 'e'
console.log(arr.slice(-1)); // 'e'
console.log(arr.slice(1, -2)); //  'b' 'c', 
console.log(arr.slice()); // 'a', 'b' 'c', 'd', 'e'
console.log(...arr); // 'a', 'b' 'c', 'd', 'e'

//-----SPLICE-----
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr); //'a', 'b' 'c', 'd', 
arr.splice(1,2);
console.log(arr); //'a' 'd'

//-----REVERSE-----
const arr2 = ['j', 'i', 'h','g', 'f'];
console.log(arr2.reverse()); //'f', 'g', 'h','i', 'j'
console.log(arr2); //'f', 'g', 'h','i', 'j'

//-----CONCAT-----
const letters = arr.concat(arr2);
console.log(letters); // 'a', 'b', 'c','d', 'e','j', 'i', 'h','g', 'f'
console.log([...arr,...arr2]); // 'a', 'b', 'c','d', 'e','j', 'i', 'h','g', 'f'

//-----JOIN-----
console.log(letters.join(' - ')); // a - b - c - d - e - j - i - h - g - f 

//-----AT-----
const arr3 = [23, 11, 64];
console.log(arr3[0]); // 23 
console.log(arr3.at(0)); // 23
// getting last array element
console.log(arr3[arr3.length -1]); // 64
console.log(arr3.slice(-1) [0]); // 64
console.log(arr3.at(-1)); // 64

//-----FOREACH-----
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const movement of movements){
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

console.log('--------FOREACH--------')
movements.forEach(function (movement) {
    if(movement > 0){
        console.log(`You deposited ${movement}`);
    }else{
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});

//-----MAP-----
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov){
//     return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

//----FILTER------
const deposit = movements.filter(function (mov){
    return mov > 0
});
console.log(movements);
console.log(deposit);

//----REDUCE------
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//Maximun value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max); //3000

//----INCLUDES------
console.log(movements.includes(-130)); // TRUE

//----SOME------
console.log(movements.some(mov => mov === -130)); // TRUE

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // FALSE

//----EVERY------
console.log(movements.every(mov => mov > 0)); // false

// Separate callback
const deposit2 = mov => mov > 0;
console.log(movements.some(deposit2)); 
console.log(movements.every(deposit2)); 
console.log(movements.filter(deposit2)); 

//----FLAT------
const arr1 = [[1,2,3], [4,5,6], 7, 8];
console.log(arr1.flat()); // [1,2,3,4,5,6,7,8]

const arrDeep = [[[1,2],3], [[4,5],6], 7, 8];
console.log(arr1.flat(2)); // [1,2,3,4,5,6,7,8]

// const overaBalance = accounts 
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overaBalance);

// //----FLATMAP------
// const overaBalance2 = accounts 
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overaBalance2);

//----SORT------
const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owner.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owner);//['Adam', 'Jonas', 'Martha', 'Zach']

console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
// });
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000];

movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]



