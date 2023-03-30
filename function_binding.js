// bind in javascript
// without bind method we can not access use property
// if we will trying to do it then it gives undefine 
// when we use bind then we call that function
let user = {
    first_name:"Rachit"
}

function func_bind_user(){
    console.log("thisuser",this.user)
}
// func_bind_user()
let finalFunction =func_bind_user.bind(user)
finalFunction()