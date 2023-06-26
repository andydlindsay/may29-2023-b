# Learning the Vocabulary

 What is a table?
 How do I create a table?
 What is a database?
 What is a WHERE clause?
 What is a query?
 What is a JOIN clause?
 What is an ERD?
 What are the four types of commands for databases?
 How do I INSERT rows into a table?
 What are the queries that correspond to the CRUD actions?

## Background

Why Databases?

Two Types of "Queries": DDL vs DML

RDBMS Systems (postgres, MySQL, Oracle)

Why Postgres?

SQLite

Tools: psql vs. pgAdmin (phpMyAdmin)

# How to Actually Do Things

Today you will learn how to...

## Create a DB

createdb [connection-option...] [option...] [dbname [description]]

## Create a Table (columns)

psql [option...] [dbname [username]]

## (CREATE) Insert Rows into a Table 

INSERT INTO tablename (column, names, go, here)
    VALUES ('values', 'go', 'in', 'here');

## (READ) Retrieve Rows from a Table via a SQL SELECT statement

    SELECT fields FROM table WHERE condition ORDER BY field;

use compound WHERE clauses to filter results e.g. AND and OR 
use compound ORDER BY clauses to set the order that will be presented
use double quotes means a reference to a field name or table name
use single quotes means a string value

## (UPDATE)

UPDATE table
SET column1 = value1,
    column2 = value2 ,...
WHERE
	condition;

## (DELETE)

DELETE FROM table WHERE condition;

# How To Relate Tables (via PK and FK)

Create an ERD



## Further SQL Selection Queries

Simple SELECT Queries

Aggregation Functions (like COUNT(), field name of the function is lowercase of the function name, etc.)

Alias any field using AS to change field names.

SELECT * is bad practice. Instead, select the fields you are interested in.

For Date Queries we have NOW() and CURRENT_DATE to make queries useful as written.

DISTINCT : give us back distinct values of a given column. this works well for a single field. (GROUP BY is better for combinations)

## Relationships

One to many relationship e.g. initially  day <-> learning objective

## There is an Order to which the clauses are executed

Note WHERE comes before SELECT, so you will get errors trying to establish a filter using fields from the SELECT clause

But you can use HAVING, which is kind of a where clause for GROUP BY specs. note that you can't use SELECT 'AS' labels here.

SELECT is for display purposes. That's why it runs toward the end of the query.

The default JOIN type is "INNER JOIN"

different join types
LEFT JOIN
INNER JOIN
RIGHT JOIN
FULL OUTER JOIN

## A Note on Speed

SQL is hyper optimized for speed, and so there is an advantage to doing things all in one query.

# Sample Queries

## count (an aggregate function)

SELECT count(id) 
FROM objectives;

## a where clause

SELECT question, answer
FROM objectives
WHERE type = 'performance';

## a where clause with AND

SELECT question, answer
FROM objectives
WHERE type = 'performance' AND sort < 5;

## JOIN
SELECT day_description, question, answer
FROM objectives
JOIN days ON objectives.day_id = days.id;

## having (... because you cannot use WHERE on an aggregate function)

SELECT count(day_id) 
FROM objectives 
GROUP BY day_id 
HAVING count(day_id) > 3;

# Basic SQL Server Dev Ops

