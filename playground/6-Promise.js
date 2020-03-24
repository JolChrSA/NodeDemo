const demoPromise = new Promise((resolve,reject) => {
   setTimeout(() => {
    //    resolve([1,2,3])
        reject('Error , Something went wrong')
   }, 2000);
})

demoPromise.then((result)=> {
         console.log(result);

}).catch((error) =>{
    console.log(error);
    
})