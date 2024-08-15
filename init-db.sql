CREATE DATABASE company;

\c company;

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    budget NUMERIC(12, 2) NOT NULL,
    established DATE NOT NULL,
    department_code INTEGER NOT NULL
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    salary NUMERIC(12, 2) NOT NULL,
    hire_date DATE NOT NULL,
    department_id INTEGER NOT NULL,
    employee_code INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (name, budget, established, department_code) VALUES
('Engineering', 1500000.00, '2000-01-01', 100),
('Marketing', 500000.00, '2005-06-15', 200),
('Sales', 750000.00, '2010-09-23', 300),
('HR', 300000.00, '2012-04-10', 400),
('Finance', 1200000.00, '2018-11-20', 500),
('IT', 900000.00, '2016-05-30', 600),
('Customer Support', 350000.00, '2014-07-15', 700),
('Legal', 400000.00, '2017-01-05', 800),
('R&D', 800000.00, '2019-09-10', 900),
('Operations', 600000.00, '2020-12-01', 1000),
('Product Management', 550000.00, '2021-03-20', 1100),
('Business Development', 450000.00, '2022-01-15', 1200),
('Procurement', 500000.00, '2019-08-05', 1300),
('Compliance', 350000.00, '2022-06-10', 1400),
('Strategy', 700000.00, '2018-05-01', 1500);

INSERT INTO employees (first_name, last_name, salary, hire_date, department_id, employee_code) VALUES
('John', 'Doe', 85000.00, '2015-01-15', 1, 1001),
('Jane', 'Smith', 60000.00, '2018-03-22', 2, 1002),
('Alice', 'Johnson', 70000.00, '2017-07-01', 1, 1003),
('Bob', 'Brown', 55000.00, '2019-11-30', 3, 1004),
('Emily', 'Davis', 95000.00, '2020-02-25', 4, 1005),
('Michael', 'Wilson', 75000.00, '2016-08-14', 5, 1006),
('Sarah', 'Miller', 82000.00, '2018-12-01', 6, 1007),
('James', 'Taylor', 90000.00, '2021-05-10', 2, 1008),
('Olivia', 'Anderson', 65000.00, '2017-09-15', 3, 1009),
('Daniel', 'Thomas', 70000.00, '2019-03-18', 4, 1010),
('Sophia', 'Garcia', 72000.00, '2020-11-05', 5, 1011),
('David', 'Martinez', 85000.00, '2021-06-22', 6, 1012),
('Lucas', 'Rodriguez', 78000.00, '2022-01-10', 7, 1013),
('Mia', 'Wilson', 69000.00, '2018-08-30', 8, 1014),
('Ethan', 'Lee', 72000.00, '2019-07-15', 9, 1015),
('Isabella', 'Harris', 64000.00, '2021-03-22', 10, 1016),
('Alexander', 'Clark', 80000.00, '2016-04-05', 1, 1017),
('Charlotte', 'Lewis', 71000.00, '2022-04-18', 2, 1018),
('Noah', 'Walker', 78000.00, '2019-11-01', 3, 1019),
('Amelia', 'Young', 69000.00, '2020-12-15', 4, 1020),
('Liam', 'Scott', 76000.00, '2021-08-01', 5, 1021),
('Harper', 'Adams', 72000.00, '2022-02-15', 6, 1022),
('Aiden', 'Roberts', 67000.00, '2018-09-22', 7, 1023),
('Sofia', 'Walker', 72000.00, '2019-05-30', 8, 1024),
('Benjamin', 'Green', 74000.00, '2021-07-01', 9, 1025),
('Lily', 'Parker', 69000.00, '2020-10-01', 10, 1026),
('William', 'King', 76000.00, '2019-11-30', 1, 1027),
('Ella', 'Carter', 67000.00, '2022-01-15', 2, 1028),
('Sebastian', 'Mitchell', 71000.00, '2020-03-22', 3, 1029),
('Grace', 'Turner', 68000.00, '2019-12-20', 4, 1030);
