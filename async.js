
//async code example

console.log('start');

setTimeout(()=> {
    console.log('We are in the time out');
}, 5000);

console.log('End');


//callbacks are not necessarily asnychronous

const items = [1,2,3,4,5];

items.forEach(item => {
    console.log(item);
});
