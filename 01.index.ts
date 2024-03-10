import inquirer from 'inquirer';

async function calculateBMI() {
  const questions = [
    {
      type: 'input',
      name: 'weight',
      message: 'Enter your weight in kg:',
      validate: function(value: string) {
        const valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      },
      filter: Number
    },
    {
      type: 'input',
      name: 'height',
      message: 'Enter your height in meters:',
      validate: function(value: string) {
        const valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      },
      filter: Number
    }
  ];

  const answers = await inquirer.prompt(questions);
  const { weight, height } = answers;

  const BMI = weight / (height * height);

  console.log(`Your BMI is: ${BMI.toFixed(2)}`);
}

calculateBMI();
