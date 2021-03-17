 USE employee_db;

    INSERT into departments(depart_name) VALUES ("Sales");
    INSERT into departments(depart_name) VALUES ("IT");
    INSERT into departments(depart_name) VALUES ("Engineer");
    INSERT into departments(depart_name) VALUES ("Human Resources");

  
    INSERT into role (title, salary, department_id) VALUES ("Engineer", 300000, 3);
    INSERT into role (title, salary, department_id) VALUES ("Sales Representative", 45000, 1);
    INSERT into role (title, salary, department_id) VALUES ("Sales Manager", 95000, 1);
    INSERT into role(title, salary, department_id) VALUES ("HR", 60000, 4);
  

      INSERT into employee ( first_name, last_name, role_id, manager_id) VALUES ( "Shia", "Labeuf", 3, null);
    INSERT into employee ( first_name, last_name, role_id, manager_id) VALUES ( "Scott", "Baio", 3, null);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Gary", "Busey", 5, null);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Charlie", "Sheen", 4, 2);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Randy", "Quaid", 5, null);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Dennis", "Hopper", 3, 1);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Jack", "Nicholson", 2, 2);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Scott", "Weiland", 3, 3);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Jack", "Kerouac", 5, 4);
    INSERT into employee ( first_name, last_name, role_id, manager_id)VALUES ( "Andy", "Dick", 2, 5);
   
    



    