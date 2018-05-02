DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Product 1", "Department 1", 19.95, 150),
  ("Product 1", "Department 1", 7.95, 14),
  ("Product 1", "Department 1", 8.95, 15),
  ("Product 1", "Department 1", 9.95, 70),
  ("Product 1", "Department 1", 19.95, 350),
  ("Product 1", "Department 1", 29.95, 100),
  ("Product 1", "Department 1", 39.95, 146),
  ("Product 1", "Department 1", 49.95, 65),
  ("Product 1", "Department 1", 59.95, 39),
  ("Product 1", "Department 1", 69.95, 6);
