var add = (function () {
    let counter = 0;
    return function () {
        console.log("counter",counter)
        counter += 1; return counter}
    })();
    console.log("addd",add())
    console.log()
    console.log("addd",add())

    // gives an error
//     var counter =120
// var add = (function () {
//      console.log("counter123",counter)
// let counter = 0;
//  console.log("counter456",counter)
// return function () {
//     console.log("counter",counter)
//     counter += 1; return counter}
// })();
// console.log("addd",add())
// console.log("addd",add())