const app = require('express')();
let cors = require('cors');
const PORT = 8050;

app.use(cors());
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send({
        "items": [
          {
            "sys": { "id": "1" },
            "fields": {
              "title": "queen panel bed",
              "type": "Household",
              "price": 2500,
              "rating": 4,
              "image": { "fields": { "file": { "url": "./images/product-1.jpeg" } } }
            }
          },
          {
            "sys": { "id": "2" },
            "fields": {
              "title": "king panel bed",
              "type": "Household",
              "price": 3000,
              "rating": 3,
              "image": { "fields": { "file": { "url": "./images/product-2.jpeg" } } }
            }
          },
          {
            "sys": { "id": "3" },
            "fields": {
              "title": "single panel bed",
              "type": "Household",
              "price": 2200,
              "rating": 5,
              "image": { "fields": { "file": { "url": "./images/product-3.jpeg" } } }
            }
          },
          {
            "sys": { "id": "4" },
            "fields": {
              "title": "twin panel bed",
              "type": "Household",
              "price": 2800,
              "rating": 4,
              "image": { "fields": { "file": { "url": "./images/product-4.jpeg" } } }
            }
          },
          {
            "sys": { "id": "5" },
            "fields": {
              "title": "fridge",
              "type": "Kitchen",
              "price": 1880,
              "rating": 2,
              "image": { "fields": { "file": { "url": "./images/product-5.jpeg" } } }
            }
          },
          {
            "sys": { "id": "6" },
            "fields": {
              "title": "dresser",
              "type": "furniture",
              "price": 3200,
              "rating": 3,
              "image": { "fields": { "file": { "url": "./images/product-6.jpeg" } } }
            }
          },
          {
            "sys": { "id": "7" },
            "fields": {
              "title": "Coombes",
              "type": "Lounge",
              "price": 4500,
              "rating": 5,
              "image": { "fields": { "file": { "url": "./images/product-7.jpeg" } } }
            }
          },
          {
            "sys": { "id": "8" },
            "fields": {
              "title": "Keeve Set",
              "type": "Tables & Chairs",
              "price": 1300,
              "rating": 4,
              "image": { "fields": { "file": { "url": "./images/product-8.jpeg" } } }
            }
          }
        ]
      });
})