// const p = Promise.resolve({ id: 1 });
//
// p.then( result => console.log(result));


const p1 = new Promise((resolve)  => {
  setTimeout(() => {
    console.log('Async operation 1');
    resolve(1);
  }, 2000);
});

//How to handle a reject with error message
// const p1 = new Promise((resolve, reject)  => {
//   setTimeout(() => {
//     console.log('Async operation 1');
//     reject(new Error('something went wrong'));
//   }, 2000);
// });

const p2 = new Promise((resolve)  => {
  setTimeout(() => {
    console.log('Async operation 2');
    resolve(2);
  }, 2000);
});

Promise.race([p1, p2])
.then(result => console.log(result))
.catch(err => console.log('Error', err.message));
