const { program } = require('commander')

const app = program.command("kdt");
app.action(() => {
  console.log("하이")
})

program.parse(process.argv)