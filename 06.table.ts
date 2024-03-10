import inquirer from 'inquirer';

async function generateTable() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'number',
            message: 'Enter a number to generate its table:',
            validate: (input: string) => {
                const parsed = parseInt(input);
                return !isNaN(parsed) && parsed > 0; // Ensure the input is a positive number
            }
        }
    ]);

    const number = parseInt(response.number);
    const table: string[] = [];

    for (let i = 1; i <= 10; i++) {
        table.push(`${number} * ${i} = ${number * i}`);
    }

    console.log(`Table of ${number}:`);
    console.log(table.join('\n'));
}

generateTable();
