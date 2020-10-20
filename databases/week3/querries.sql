--Meals Querries
--Get all meals
Select*
from meal;
--Add a new meal 
insert into meal
values(6, 'A Vegetarian Meal', '2 Salad, 2 Soup, 2 Starter, 2 Main Dish, 1 Desert', 'south-west', '2020-10-16', 10, 500, '2020-10-20');
--Get a meal with any id, fx 1
Select*
from meal
where id = 3;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
set `price
` = '750', `created_date` = '2020-10-05' where id= 4 ;
--Delete a meal with any id, fx 1
delete from meal where id = 6;

--Reservation Querries
--Get all reservations
Select*
from reservation;
--Add a new reservations 
insert into reservation
values(6, 3, 4, '2020-10-14', '54986327', 'damie', 'damie@hotmail.com');
--Get a reservation with any id, fx 1
Select*
from reservation
where id = 5;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set number_of_guests = 4, `contact_email
` = 'mazz_96@gmail.com' where id= 2 ;
--Delete a reservation with any id, fx 1
delete from reservation where id = 6 and contact_name = 'damie';

-- Reviews Querries
--Get all reviews
Select *
from review
--Add a new review
insert into review
values(6, 'A Xtra-Large Meal', 'good', 3, 3, '2020-10-12');
-- Get a review with any id, fx 1
Select*
from review
where id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
set description = 'add some salt' where id= 6
;
-- Delete a review with any id, fx 1
delete from review where id = 6;

--Additional Querries
--Get meals that has a price smaller than a specific price fx 90
select *
from meal
where price < 90;
--Get meals that still has available reservations
select *
from meal
    inner join reservation
    on meal.id = reservation.meal_id and reservation.number_of_guests < meal.max_reservations;
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select *
from meal
where title like '%Large%';
-- I dont have rød grød n any title, so used another word
--Get meals that has been created between two dates
select *
from meal
where created_date BETWEEN '2020-09-20' and '2020-10-11';
--Get only specific number of meals fx return only 5 meals
select *
from meal
limit
4;
--Get the meals that have good reviews
select *
from meal
    inner join review on meal.id = review.meal_id and review.stars >3;
--Get reservations for a specific meal sorted by created_date
select *
from reservation
    inner join meal on reservation.meal_id = meal.id
        and meal.title = 'A Meal'
order by meal.created_date;
--Sort all meals by average number of stars in the reviews
select *, avg(review.stars)
from meal
    inner join review on meal.id = review.meal_id
order by 'stars';