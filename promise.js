

const returnPromise =(num)=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num%2==0){
                resolve("The number is even.")
            }else{
                reject("The number is odd.")
            }  
        },5000) 
    })

    return promise
}

async function as (){
    try{
        const prom = await returnPromise(4)
        console.log("This is try-catch:",prom)
    }catch(error){
        console.log("This is try-catch:",error)
    }
}

as()

