const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(4040, () => {
    console.log('Server running on 4040')
})

// const express = require('express');
// const getProducts = require('./getProducts');
// const getProduct = require('./getProduct);

// const app = express();

// const port = 4040;

// app.get('/api/products', getProducts);
// app.get('/api/product/:id', getProduct);

// app.listen(port, () => {
//     console.log(`Server listening on port: ${port}`);
// });