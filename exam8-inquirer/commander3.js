import { program } from "commander";
import inquirer from "inquirer";

program
  .option('-n, --name <name>', 'Your name')
  .option('-a, --age <age>', 'Your age')
  .option('-e, --email <email>', 'Your email address')
  .parse(process.argv);

if (!program.name || !program.age || !program.email) {
  const questions = [];

  if (!program.name) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    });
  }

  if (!program.age) {
    questions.push({
      type: 'input',
      name: 'age',
      message: 'What is your age?'
    });
  }

  if (!program.email) {
    questions.push({
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    });
  }

  inquirer.prompt(questions).then((answers) => {
    const { name, age, email } = Object.assign(program.opts(), answers);

    console.log(`Your name is ${name}.`);
    console.log(`You are ${age} years old.`);
    console.log(`Your email address is ${email}.`);
    console.log(questions)
  });
} else {
  const { name, age, email } = program;

  console.log(`Your name is ${name}.`);
  console.log(`You are ${age} years old.`);
  console.log(`Your email address is ${email}.`);
}