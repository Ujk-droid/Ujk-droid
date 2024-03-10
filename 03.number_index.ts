
import inquirer from "inquirer";
const myNumber = await inquirer.prompt([
    { 
        type:'input',
        name:'yourNumber',
        message:'enter number'
    }
])
console.log('your number is ' + myNumber.yourNumber);
console.log(typeof myNumber.yourNumber);

