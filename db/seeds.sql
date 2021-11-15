-- input db
INSERT INTO department(id, department_name)
VALUES
    (1, 'Engineering'),
    (2, 'Finance'),
    (3, 'Legal'),
    (4, 'Sales');

INSERT INTO role(id, title, salary, department_id)
VALUES
    (101, 'Senior Engineer', 130000, 1),
    (102, 'Engineer', 85000, 1),
    (201, 'Chief Financial Officer', 100000, 2),
    (202, 'Financial Accountant', 70000, 2),
    (301, 'Chief Legal Officer', 105000,3),
    (302, 'Law Assistant', 80000, 3),
    (401, 'Head of Sales', 95000, 4),
    (402, 'Salesman', 65000, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES
    (1001, 'Tim', 'Cook', 101, null),
    (1002, 'Jack', 'London', 102, 1001),
    (1003, 'Luca', 'Tony', 201, null),
    (1004, 'Nicky', 'Dawson', 202, 1003),
    (1005, 'Eva', 'Whiteman', 301, null),
    (1006, 'Hulk', 'Smith', 302, 1005),
    (1007, 'Lucky', 'Luke', 401, null),
    (1008, 'Dorji', 'Paten', 402, 1007);
