CREATE TABLE `Reservation`
(
  `id` int,
  `number_of_guests` int,
  `meal_id` int,
  `created_date` date,
  `contact_phonenumber` varchar
(255),
  `contact_name` varchar
(255),
  `contact_email` varchar
(255)
);

CREATE TABLE `Meal`
(
  `id` int,
  `title` varchar
(255),
  `description` text,
  `location` varchar
(255),
  `when` datetime,
  `max_reservations` int,
  `price` decimal,
  `created_date` date,
  primary key
(id)
);

CREATE TABLE `Review`
(
  `id` int,
  `title` varchar
(255),
  `description` text,
  `meal_id` int,
  `stars` int,
  `created_date` date
);

ALTER TABLE `Reservation`
ADD FOREIGN KEY
(`meal_id`) REFERENCES `Meal`
(`id`);

ALTER TABLE `Review`
ADD FOREIGN KEY
(`meal_id`) REFERENCES `Meal`
(`id`);

--Inserted values for the tables


insert into reservation
values(1, 4, 2, '2020-10-20', '14785296', 'jaz', 'jaz@hotmail.com'),
    (2, 3, 3, '2020-10-18', '68741596', 'maaz', 'mazz_32@gmail.com'),
    (3, 2, 1, '2020-10-15', '95854587', 'piya', 'piya@outlook.com'),
    (4, 7, 5, '2020-10-16', '851432296', 'krish', 'krish@yahoo.com'),
    (5, 3, 1, '2020-10-18', '74585129', 'adu', 'adu@hotmail.com'),
    (6, 5, 4, '2020-10-15', '41758367', 'emil', 'emil@yahoo.com');

insert into meal
values(1, 'A Meal', '1 starter,1 soup,1 main dish, 1 desert', 'north', '2020-10-12', 2, 200, '2020-05-20'),
    (2, 'A Large Meal', '2 starter,3 soup,3 main dish, 3 desert', 'west', '2020-10-15', 4, 350, '2020-05-20'),
    (3, 'An Xtra-Large Meal', '3 starter,2 soup,4 main dish, 3 desert', 'north-east', '2020-10-18', 6, 450, '2020-05-20'),
    (4, 'A Double Xtra-Large Meal', '3 starter,4 soup,4 main dish, 4 desert', 'south-west', '2020-10-16', 8, 700, '2020-05-20'),
    (5, 'An Extravaganza Meal', '4 starter,5 soup,5 main dish, 4 desert', 'west', '2020-10-15', 8, 1000, '2020-05-20');

insert into review
values(1, 'A Large Meal', 'delicious starter and main dish', 2, 4, '2020-10-14'),
    (2, 'A Xtra-Large Meal', 'yummy food', 3, 5, '2020-10-16'),
    (3, 'A Meal', 'not so good', 1, 2, '2020-10-15'),
    (4, 'An Extravaganza Meal', 'excellent flavours', 5, 5, '2020-10-18'),
    (5, 'A Large Meal', 'extra spice', 2, 4, '2020-10-20')