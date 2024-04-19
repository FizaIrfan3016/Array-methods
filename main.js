/**Deep learning of Arrays */
/**Declaring Arrays: */
//Using square brackets
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
//Using Array <element Type> syntax.
var names = ['Charlie', 'John', 'Maria'];
console.log(names);
/**Accessing Elements :*/
var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); //Output Apple
console.log(fruits[2]); //output Orange
/**Modifying elements */
var numberS = [1, 2, 3, 4, 5];
numberS[2] = 10;
console.log(numberS); //Output [1,2,10,4,5]
/**Array methods */
var freinds = ['Alia', 'Mariyam', 'Nehan', 'Zara'];
//using push() method
//freinds.push('zainab')
console.log(freinds); // ['Alia', 'Mariyam', 'Nehan', 'Zara', 'zainab]
//using pop() method
// freinds.pop()
console.log(freinds); // Output['Alia', 'Mariyam', 'Nehan']
//Using splice() method
//freinds.splice(1) // removes 1 element of index 1
//console.log(freinds)// output ['Alia']
//freinds.splice(1,2) // removes 2 element of index 1,2
//console.log(freinds) // output ['Alia', 'Zara']
freinds.splice(0, 2); //removes 3 element 0...2
console.log(freinds); // Output ['Nehan', 'Zara']
//Using slice() method
var sliced = freinds.slice(1, 3); // Extract elements from 1 to 3
console.log(sliced); // output ['Zara']
//Using foreach() method
var arr = [1, 2, 3];
arr.forEach(function (element) {
    console.log(element * 2); // output 2, 4, 6. This Array multiply by 2 .
});
// using map() method
var arrTo = arr.map(function (element) { return element * 2; });
console.log(arrTo); // Output 2,4,6.
