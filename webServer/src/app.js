const express = require('express')
const path = require('path')

// console.log(__filename);
console.log(__dirname);
// console.log(path.join(__dirname,'../public'));

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public');
const PORT = process.env.PORT || 3000

console.log('views',__dirname + '/views');

app.set('views',__dirname + '/views')
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=> {
    // res.send('Hello Express!!')
    res.render('index',{
        name: 'Joliph',
        title: 'Wheter app'
    })
})

app.get('/help',(req,res) => {
    res.send(
        [{
        name: 'Joliph',
        age: 25
    },
    {
        name: 'Rahul',
        age: 26
    }]
    )
})

app.get('/products',(req,res) => {
    
    if (!req.query.search) {
       return res.send({
            Error: "You must provide a Search "})
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.listen(3000,()=> {
    
    console.log(`Server has been started on PORT: ${PORT}`);
})