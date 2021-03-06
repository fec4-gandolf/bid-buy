const db = require('../../server/db.js');
const { generateProduct, handleSeeding } = require('../../server/seedHelpers.js');
const Product = require('../../server/model.js');

beforeAll(() => {
  db.handleConnect();
});

afterAll(() => {
  db.mongoose.disconnect();
});

describe('product generator', () => {
  const product = generateProduct(1);

  test('returns an object', () => {
    expect(typeof generateProduct()).toBe('object');
  });

  test('returns an object with the correct keys', () => {
    const expectedKeys = ['id', 'name', 'condition', 'price', 'sellerNote', 'expiresAt',
      'watchers', 'bids', 'shippingCountry', 'returnsAllowed'];

    expect(Object.keys(product)).toEqual(expect.arrayContaining(expectedKeys));
  });

  test('returns an object with the correct value types', () => {
    expect(product).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      condition: expect.any(String),
      price: expect.any(Number),
      sellerNote: expect.any(String),
      expiresAt: expect.any(Date),
      watchers: expect.any(Number),
      bids: expect.any(Number),
      shippingCountry: expect.any(String),
      returnsAllowed: expect.any(Boolean),
    }));
  });
});

describe('seeder', () => {
  beforeAll(() => handleSeeding());

  test('seeds database with multiple products', () => (
    Product.find()
      .then(products => expect(products.length > 0).toBe(true))
  ));
});
