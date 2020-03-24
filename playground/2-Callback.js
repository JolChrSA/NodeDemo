const add = (address, callback) => {
    setTimeout(() => {
        const data = {
            name : "Joliph",
            city: address
        }
        callback(data)
    }, 2000);
 }

add("Ahmedabad",(data)=> {
    console.log(data);
    
}) 


