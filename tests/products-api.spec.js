const { test, expect } = require('@playwright/test');

const contentTypeHeaders = {
  'Content-Type': 'application/json',
};

const testProduct = {
  title: 'iPhone 15',
  description: 'More than just a phone',
  price: 2600,
  stockCount: 10,
};

const updatedTestProduct = {
  title: 'iPhone 15 Pro',
  description: 'More than just a phone',
  price: 2800,
  stockCount: 300,
};

test('creating a products', async ({ request }) => {
  const response = await request.post('/api/v1/products', {
    headers: contentTypeHeaders,
    data: testProduct,
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);

  const rawResponseBody = await response.body();
  const responseBody = JSON.parse(rawResponseBody.toString());
  expect(responseBody).toHaveProperty('id');
  expect(responseBody.title).toBe(testProduct.title);
  expect(responseBody.description).toBe(testProduct.description);
  expect(responseBody.price).toBe(testProduct.price);
  expect(responseBody.stockCount).toBe(testProduct.stockCount);
});

test('getting single products', async ({ request }) => {
  let response = await request.post('/api/v1/products', {
    headers: contentTypeHeaders,
    data: testProduct,
  });

  let rawResponseBody = await response.body();
  let responseBody = JSON.parse(rawResponseBody.toString());

  const createdProductId = responseBody.id;
  response = await request.get(`/api/v1/products/${createdProductId}`);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  rawResponseBody = await response.body();
  responseBody = JSON.parse(rawResponseBody.toString());

  expect(responseBody.id).toBe(createdProductId);
  expect(responseBody.title).toBe(testProduct.title);
  expect(responseBody.description).toBe(testProduct.description);
  expect(responseBody.price).toBe(testProduct.price);
  expect(responseBody.stockCount).toBe(testProduct.stockCount);
});

test('updating a products', async ({ request }) => {
  let response = await request.post('/api/v1/products', {
    headers: contentTypeHeaders,
    data: testProduct,
  });

  let rawResponseBody = await response.body();
  let responseBody = JSON.parse(rawResponseBody.toString());

  const createdProductId = responseBody.id;
  response = await request.put(`/api/v1/products/${createdProductId}`, {
    headers: contentTypeHeaders,
    data: updatedTestProduct,
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  rawResponseBody = await response.body();
  responseBody = JSON.parse(rawResponseBody.toString());

  expect(responseBody.id).toBe(createdProductId);
  expect(responseBody.title).toBe(updatedTestProduct.title);
  expect(responseBody.description).toBe(updatedTestProduct.description);
  expect(responseBody.price).toBe(updatedTestProduct.price);
  expect(responseBody.stockCount).toBe(updatedTestProduct.stockCount);
});

test('getting list of products', async ({ request }) => {
  const response = await request.get('/api/v1/products');
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const rawResponseBody = await response.body();
  const responseBody = JSON.parse(rawResponseBody.toString());
  expect(Array.isArray(responseBody)).toBeTruthy();
});

test('deleting a products', async ({ request }) => {
  let response = await request.post('/api/v1/products', {
    headers: contentTypeHeaders,
    data: testProduct,
  });

  let rawResponseBody = await response.body();
  let responseBody = JSON.parse(rawResponseBody.toString());

  const createdProductId = responseBody.id;
  response = await request.delete(`/api/v1/products/${createdProductId}`);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(204);

  response = await request.get(`/api/v1/products/${createdProductId}`);
  expect(response.ok()).toBeFalsy();
  expect(response.status()).toBe(404);
});
