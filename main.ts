// Some code of comment out using 1 or 3 times same value and console so please check the code first and 
//then practice otherwise you find errors in code.

/**Deep learning of Arrays */

/**Declaring Arrays: */
//Using square brackets
let numbers : number[]=[1, 2, 3, 4, 5, 6]
console.log(numbers);
//Using Array <element Type> syntax.
let names :Array<string>=['Charlie', 'John', 'Maria']
console.log(names);

/**Accessing Elements :*/
let fruits :string[]=['Apple','Banana','Orange']
console.log(fruits[0]);//Output Apple
console.log(fruits[2]);//output Orange

/**Modifying elements */
let numberS:number[]=[1,2,3,4,5];
numberS[2]=10;
console.log(numberS); //Output [1,2,10,4,5]

/**Array methods */
let freinds: string[]=['Alia', 'Mariyam', 'Nehan', 'Zara']
//using push() method
//freinds.push('zainab')
console.log(freinds) // ['Alia', 'Mariyam', 'Nehan', 'Zara', 'zainab]

//using pop() method
// freinds.pop()
console.log(freinds) // Output['Alia', 'Mariyam', 'Nehan']

//Using splice() method
//freinds.splice(1) // removes 1 element of index 1
//console.log(freinds)// output ['Alia']
//freinds.splice(1,2) // removes 2 element of index 1,2
//console.log(freinds) // output ['Alia', 'Zara']
freinds.splice(0,2) //removes 3 element 0...2
console.log(freinds) // Output ['Nehan', 'Zara']

//Using slice() method
let sliced:string[]= freinds.slice(1 , 3); // Extract elements from 1 to 3
console.log(sliced) // output ['Zara']

//Using foreach() method
let arr : number[]=[1,2,3]
arr.forEach((element) => {
    console.log(element * 2); // output 2, 4, 6. This Array multiply by 2 .
}
);

// using map() method
let arrTo : number[]= arr.map((element) => element * 2 );
console.log(arrTo) // Output [2,4,6] . Now this array multipy by to and returs in array.



