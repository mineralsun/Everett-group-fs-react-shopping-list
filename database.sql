-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shoppingList (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" NUMERIC NOT NULL
);

INSERT INTO shoppingList ("name", "quantity")
VALUES ('Bread', 1);