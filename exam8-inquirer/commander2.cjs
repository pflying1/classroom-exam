const { program } = require('commander')

const app = program.command('add <a> <b> ')

app.action((a,b) => {
  const result = Number(a) + Number(b);
  console.log(`${a} + ${b} = ${result}`)
})

program.parse(process.argv)