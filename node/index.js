const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const name = 'Dioner'
  console.log(name);

  connection.query(`INSERT INTO people (name) VALUES ('${name}')`)

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${(results && results.length > 0) ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
})


app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})