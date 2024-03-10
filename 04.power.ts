
//power of number
import inquirer from 'inquirer'

const myNumber = await inquirer.prompt([
    { 
        type: 'number',
        name: 'yourNumber',
        message:'enter numberto get is square.'
    },
        
])
let num1 = myNumber.yourNumber;
console.log(`square of ${num1}is ${num1*num1}`);

   //example product of cube.
   const myNumber1 = await inquirer.prompt([
    {
        type: 'number',
        name: 'yourNumber1',
        message:'enter number to get is cube.'
   }
   ])
   let num2 = myNumber1.yourNumber1;
   console.log(`cube of ${num2}is ${num2}`);
   


