INSERT INTO department (name)
VALUES
    ('IT Department'),
    ('HR Department');

INSERT INTO role (title, salary, department_id)
VALUES
    ('IT Manager', 75000, 1),
    ('IT Staff', 50000, 1),
    ('HR Manager', 45000, 2),
    ('HR Staff', 35000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Joey', 'Tribiani', 1, NULL),
    ('Rachel', 'Green', 2, NULL),
    ('Monica', 'Geller', 2, 1),
    ('Phoebe', 'Buffay', 3, 2),
    ('Chandler', 'Bing', 4, 1),
    ('Ross', 'Geller', 4, 2);

