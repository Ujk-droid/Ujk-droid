import inquirer from 'inquirer';

async function calculateSpeed() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'distance',
            message: 'Enter the distance (in kilometers):',
            validate: (input: string) => {
                const parsed = parseFloat(input);
                return !isNaN(parsed) && parsed > 0; // Ensure the input is a positive number
            }
        },
        {
            type: 'input',
            name: 'time',
            message: 'Enter the time taken (in hours):',
            validate: (input: string) => {
                const parsed = parseFloat(input);
                return !isNaN(parsed) && parsed > 0; // Ensure the input is a positive number
            }
        }
    ]);

    const distance = parseFloat(response.distance);
    const time = parseFloat(response.time);

    const speed = distance / time;

    console.log(`The speed of the car is: ${speed.toFixed(2)} km/h`);
}

calculateSpeed();
