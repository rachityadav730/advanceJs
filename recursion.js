// when function all itself
// take a example of basic power example


// function pow(x,n){
//     if (n==1){
//         return x
//     }else{
//         return x*pow(x,n-1)
//     }
// }

// run code through arrow funtion

const pow=(x,n)=>{
    if (n==1){
        return x
    }else{
        return x*pow(x,n-1)
    }
}

console.log("pow(2,3)",pow(2,3))
