//sync code example
//execution in a specified format

// function otherFunction(){
//     console.log('We are in another function');
//     console.log('do some stuff')
// }

// console.log('start');

// otherFunction();

// console.log('End');


//async code example

console.log('start');

setTimeout(()=> {
    console.log('We are in the time out');
}, 2000);

console.log('End');