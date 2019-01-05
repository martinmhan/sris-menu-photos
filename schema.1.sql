DROP DATABASE IF EXISTS menu_db;

CREATE DATABASE menu_db;

USE menu_db;

CREATE TABLE menus (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rest_id int NOT NULL,
  rest_name varchar(50) NOT NULL,
  menu_type_num int NOT NULL,
  menu_type_name varchar(50) NOT NULL,
  menu_section_num int NOT NULL,
  menu_section_name varchar(50) NOT NULL,
  menu_section_description text NULL,
  menu_item_name varchar(50) NOT NULL,
  menu_item_description text NULL,
  menu_item_price varchar(50) NULL
);

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rest_id int NOT NULL,
  photo_id int NOT NULL,
  photoURL text NOT NULL
);


INSERT into photos (rest_id, photo_id, photoURL) VALUES (1,1, "https://s3-us-west-1.amazonaws.com/table-it/all_my_friends_are_dead.jpg");


INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 0, "Breakfast", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 1, "Lunch", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (0,"The Red WheelBarrow", 2, "Dinner", 2, "Desserts", null, "Waffles", null, "$99.42");

-- Break

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 0, "Breakfast", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 1, "Lunch", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (1,"Delia's Chicken Sausage", 2, "Dinner", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 0, "Appetizer", null, "Butter", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 0, "Breakfast", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 0, "Appetizer", null, "Pita and shwarma", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 0, "Appetizer", null, "shishkabob", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 0, "Appetizer", null, "salad", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 1, "Mains", null, "Eggs and Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 1, "Lunch", 2, "Desserts", null, "Waffles", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 0, "Appetizer", null, "Bread", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 0, "Appetizer", null, "Bacon", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 0, "Appetizer", null, "Steak", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 1, "Mains", null, "Chicken parmesean", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 1, "Mains", null, "Hash Browns", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 2, "Desserts", null, "Apple Pie", null, "$99.42");

INSERT into menus (rest_id, rest_name, menu_type_num, menu_type_name, menu_section_num, menu_section_name, menu_section_description, menu_item_name, menu_item_description, menu_item_price) VALUES (2,"Hummus Factory", 2, "Dinner", 2, "Desserts", null, "Waffles", null, "$99.42");
