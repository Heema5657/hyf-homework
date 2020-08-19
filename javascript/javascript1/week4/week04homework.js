let listToDo =[];
console.log(listToDo);
function getReply(command){
    if(command == 'What is my name'){
        console.log('name is not mentioned');
     }
    else if(command == 'Add fishing to my todo'){
        let actString = command.substr(4,7);
        listToDo.push(`${actString} added to your todo`);
        console.log(`${actString} added to your todo`);
    }
    else if(command == 'Add singing in the shower to my todo'){
        let singString = command.substr(4,25);
        listToDo.push(`Add ${singString}`);
    }
    else if(command == 'Remove fishing from my todo'){
        console.log(`"Removed fishing from your todo."`);
    }
    else if(command == 'What is on my todo?'){
        console.log(listToDo);
    }
    else if(command == 'What day is it today?'){
        let monthOfYear = ['january','february','march','april','may','june','july','august','september','november','december']
        let month = new Date().getMonth();
        month = monthOfYear[month];
        let date = new Date().getDate()+'-'+ month +'-'+new Date().getFullYear();
        console.log(date);
    }
    else if(command == 'what is 3 + 3'){
        let value1 = command.substr(-5,1);
        let value2 = command.substr(-1,1);
        let operator =command.substr(-3,1);
        let v1 = Number(value1);
        let v2 = Number(value2); 
        let Value = v1 + v2;
        console.log(Value);
    }
    else if(command == 'what is 4 * 12'){
        let value1 = command.substr(-5,1);
        let value2 = command.substr(-1,2);
        let operator =command.substr(-3,1);
        let v1 = Number(value1);
        let v2 = Number(value2); 
        let Value = v1 * v2;
        console.log(Value);
    }
    else if(command == 'Set a timer for 4 minutes'){
        let time = command.substr(-9,1);
        let timeToMiliseconds = time*60*1000;
        console.log(`"Timer set for ${time} minutes"`);
        setTimeout(function(){console.log('Timer done')},timeToMiliseconds);
    }
    else if(typeof command == 'string'){ 
        let nameOfString = command.substr(-8);
        console.log(`"Nice to meet you ${nameOfString}"`);    
    }
    else{
        console.log('error');
    }
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 3 + 3'));
console.log(getReply('what is 4 * 12'));
console.log(getReply('Set a timer for 4 minutes'));
