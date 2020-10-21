--Get all the tasks assigned to users whose email ends in @spotify.com
use homework;
select task.id, task.title, task.description, task.created, task.updated, task.due_date, task.status_id
from task, user, user_task
where task.id = user_task.task_id
    AND user.id = user_task.user_id
    AND user.email LIKE '%@spotify.com';
-- Get all the tasks for 'Donald Duck' with status 'Not started'
select *
from task, user, status, user_task
where task.id = user_task.task_id
    and user.id = user_task.user_id
    AND user.name = 'Donald Duck'
    AND status.name = 'Not started'
--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select *
from task, user, user_task
where task.id = user_task.task_id
    and user.id = user_task.user_id
    AND user.name = 'Maryrose Meadows'
    AND MONTH(task.created) = '09';
-- select *
-- from task,user,user_task
-- where task.id = user_task.task_id 
-- and user.id = user_task.user_id
-- AND user.name = 'Maryrose Meadows'
-- AND created LIKE '%09%'
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select * , MONTHNAME(task.created) as 'Creation Month'
from task
group by MONTHNAME(task.created)
order by created