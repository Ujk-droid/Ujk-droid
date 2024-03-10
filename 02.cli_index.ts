
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
      type :'input',
      name:'name',
      message: 'what is your name?'

    },
    {
        type: 'number',
        name:'age',
        message:'Enter your age?'
    },
    {
        type:'list',
        name:'gender',
        message:'what is your gender?',
        choices: ['male','female','prefer not to sy']
    }
]);

console.log("your name is" + answer.name +",your age is" + answer.age +",your gender is" + answer.gender);