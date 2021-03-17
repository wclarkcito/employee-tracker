   drop database if exists employee_db;
   
    CREATE DATABASE employee_db;
    
    USE employee_db;
    
    CREATE TABLE departments(
    depart_name VARCHAR(30) NOT NULL,
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL
    );
    
    CREATE TABLE role (
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER(11),
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    
    CONSTRAINT fk_departments
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE CASCADE
    );
    
    CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    
    
	CONSTRAINT fk_role_
    FOREIGN KEY (role_id)
    REFERENCES role_(id)
    ON DELETE CASCADE,
    
	CONSTRAINT fk_employee
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
    );

    
   