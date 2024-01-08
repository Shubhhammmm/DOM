const promise = new Promise((resolve, reject) =>{

    let a  = Math.floor(Math.random() * 10)
    if(a <= 9){
        resolve(`working for this number ${a}`)
    }
    else{
        reject(`will not work for this number ${a}`)
    }

})
.then((res) => console.log(res))
.catch((e) => console.log(`opps try harder ${e}`))