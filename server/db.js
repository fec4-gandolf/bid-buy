const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products-bid-buy', {useNewUrlParser: true});

const Product = mongoose.model('Product', {
  name: String,
  'url-name': {
    type: String,
    unique: true
  },
  condition: String,
  price: Number,
  sellerNode: String,
  expiresAt: Date,
  watchers: Number,
  bids: Number,
  shippingCountry: String,
  returnsAllowed: Boolean
});

// const p1 = new Product({name: 'Another Golf club', 'url-name': 'golf-club2', expiresAt: new Date()});
// p1.save().then(() => console.log('saved successfully'));

Product.find().then(results => console.log(results));