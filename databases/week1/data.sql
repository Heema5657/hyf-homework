-- 1 task
SELECT count(id)
FROM task
-- 2 task
SELECT title, due_date
FROM task
WHERE due_date IS NULL;
-- 3 task
SELECT *
FROM TASK
WHERE STATUS_ID = 3
-- 4 task
SELECT *
FROM TASK
WHERE STATUS_ID != 3
-- 5 task
SELECT *
FROM TASK
ORDER BY created ASC
-- 6 task
SELECT *
FROM TASK
ORDER BY created DESC
-- LIMIT 1
--Alternate for limit
-- SELECT TOP 1 *
-- FROM TASK
-- ORDER BY created DESC
-- 7 task
SELECT title, due_date
FROM TASK
WHERE title LIKE '%database%' OR description LIKE '%database%';
-- 8 task
SELECT TASK.TITLE, STATUS.NAME
FROM TASK, STATUS
WHERE (TASK.STATUS_ID = STATUS.ID);
-- 9 task
SELECT count(STATUS.NAME), status.name
FROM TASK, STATUS
WHERE TASK.STATUS_ID = STATUS.ID
group by status.name
-- 10 task
SELECT count(STATUS.NAME), status.name
FROM TASK, STATUS
WHERE TASK.STATUS_ID = STATUS.ID
group by status.name
order by count(status.name)
