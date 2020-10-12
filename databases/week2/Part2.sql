--Create a new database containing the following tables:
create database homework;
USE homework;
create table `class`
(
`class_id` int not null auto_increment,
`name` varchar
(50) not null,
`start_date` date not null,
`end_date` date not null,
PRIMARY KEY
(`class_id`)
);
create table `student`
(
`student_id` int not null auto_increment,
`name` varchar
(50) not null,
`email` varchar
(50) not null,
`phone` int
(8) not null,
`class_id` int not null,
PRIMARY KEY
(`student_id`),
FOREIGN KEY
(`class_id`) REFERENCES class
(`class_id`)
);
--Create an index on the name column of the student table.
create index student_name on student
(`name`);
--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
alter table `class`
add `status` enum
('not-started','ongoing','finished');