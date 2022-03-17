INSERT INTO departments (name)
VALUES
    ('IT Department'),
    ('HR Department');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('IT Manager', 75000, 1),
    ('IT Staff', 50000, 1),
    ('HR Manager', 45000, 2),
    ('HR Staff', 35000, 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
    ('Joey', 'Tribiani', 1),
    ('Rachel', 'Green', 2),
    ('Monica', 'Geller', 2),
    ('Phoebe', 'Buffay', 3),
    ('Chandler', 'Bing', 4),
    ('Ross', 'Geller', 4);

UPDATE employees SET manager_id = 1 WHERE role_id = 2 
UPDATE employees SET manager_id = 4 WHERE role_id = 4;