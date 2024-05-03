#! /usr/bin/env node

// Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull Welcome Message
console.log(chalk.bold.cyanBright("\n \t\t Welcome to Younus Awan - Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a sentance 
let answers = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "Enter a Sentance",
    }
]);

// Triming the sentance and spliting it into words based on "spaces"
let words = answers.sentance.trim().split(" ");

// Analysis of user input sentance
console.log("=".repeat(60));
console.log(chalk.bold("Sentance Words:"));
console.log(words);
console.log(chalk.bold(`\n - worf count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));