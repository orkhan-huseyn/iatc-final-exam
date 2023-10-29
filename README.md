# IATC Full-Stack Group Final Exam

Welcome to your final exam. On this part you'll create a REST API using Express & Sequelize using sqlite database.

## Running the app

To run the application, first run `npm install` then start your development server using `npm run dev` command.

## Running tests

There are prewritten tests for you to check if your code will work or not. To run the tests use `npm run test` command.

## What you need to do

Create a products REST API that has the following endpoints:

- `POST /api/v1/products` creates a product and returns it
- `GET /api/v1/products` returns list of all products
- `GET /api/v1/products/:id` returns single product with given id
- `PUT /api/v1/products/:id` updates a product with given id and given data
- `DELETE /api/v1/products/:id` deletes a product with given id

Everything is setup for you including routes and sequelize. You just need to:

- Create your Product model inside `src/models/product.js` file. You can refer to sequelize documentation if you need.
- Fill the provided methods inside `src/controllers/products.js` file. There are 5 functions that you need to write their logic.

## Grading criteria

Total of this part of the exam is 30 points.

- 25 points to pass all the test cases (there are 5 test cases, 5 point for each)
- 5 points to have no linting errors

It's strictly prohibited to ignore linting errors by `// eslint-disable` comments and to modify test files in order to get all of them passing.
