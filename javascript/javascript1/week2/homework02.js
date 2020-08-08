//Exercise 1 
function getFullName(firstname, surname, useFormalName){
    if(useFormalName){
        return 'Lord' +  ' ' + firstname + ' ' + surname;
    }
    else{
        return firstname + ' ' + surname ;
    }
}
const fullname1 = (getFullName('Heema','Negandhi', true));
const fullname2 = (getFullName('Karolina', 'Urnieziute'));
console.log(fullname1);
console.log(fullname2);

// Exercise 2
const daysInWeek =['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
function getEventWeekday(number){
    let d = new Date();
    let n = d.getDay();
    let i = (n + number) % 7;
    return daysInWeek[i];
}
console.log(getEventWeekday(1));

// Exercise 3 
function youCreateThisFunctionName(tempearture){
    if(tempearture <= 0){
        console.log('Wear Winter wear')
    }
    else if(tempearture <= 10){
        console.log('Wear autumn wear')
    }
    else if(tempearture <= 20){
        console.log('Wear spring wear')
    }
    else {
        console.log('Wear summer wear')
    }
}
const clothesToWear = youCreateThisFunctionName(15);
console.log(clothesToWear);

// Exercise 4

const class07Students = [];
function addStudentToClass(studentName) {
    // You write code here
if(studentName === ''){
        return 'This cannot be added.';
}
else if(class07Students.includes(studentName)){
    return `${studentName} is already in the class.`;
}
else if (studentName === 'queen'){
    return class07Students.push(studentName);
}
else if(class07Students.length >= 6 ){
    return'Cannot add more students to class 07';
}
else{
    return class07Students.push(studentName);
}
}
console.log(addStudentToClass('Viral'));
console.log(addStudentToClass('Shruthi'));
console.log(addStudentToClass('Heema'));
console.log(addStudentToClass('Vishal'));
console.log(addStudentToClass('Karolina'));
console.log(addStudentToClass('Pankaj'));
console.log(addStudentToClass('Sowmya'));
console.log(addStudentToClass(''));
console.log(addStudentToClass('queen'));
console.log(class07Students);

function getNumberOfStudents() {
    return class07Students.length;
}
console.log(getNumberOfStudents());