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

    
    USE employee_db;

    INSERT into departments VALUES ("Sales", 3);
    INSERT into departments VALUES ("IT", 5);
    INSERT into departments VALUES ("Engineer", 7);
    INSERT into departments VALUES ("Human Resources", 9);

  
    INSERT into role (title, salary, department_id) VALUES ("Engineer", 300000, 7);
    INSERT into role (title, salary, department_id) VALUES ("Sales Representative", 45000, 3);
    INSERT into role (title, salary, department_id) VALUES ("Sales Manager", 95000, 3);
    INSERT into role(title, salary, department_id) VALUES ("HR", 60000, 9);
  

    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Shia", "Labeuf", 3, null);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Scott", "Baio", 3, 7);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Gary", "Busey", 7, null);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Charlie", "Sheen", 7, 9);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Randy", "Quaid", 9, null);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Dennis", "Hopper", 7, 1);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jack", "Nicholson", 7, 1);
    INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Scott", "Weiland", 3, 1);
   
    



    