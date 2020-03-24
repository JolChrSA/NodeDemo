const name = "Joliph"
const userage  = 25
const location = "Ahmedabad"

const user = {
    name ,
    age: userage,
    location
}

// console.log(user);

const product = {
    label : 'Reliance',
    price : 200,
    share : 1,
    rating: 4.2
}

// const {label: ProLabel,price,share, rating= 5} = product

// console.log(ProLabel);
// console.log(price);
// console.log(share);
// console.log(rating);

const transaction = (type , {label,price}) => {
    console.log(label);
    console.log(price);
}

transaction('Order', product)