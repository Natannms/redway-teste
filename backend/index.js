const cors = require("cors");
const express = require("express");
require('dotenv').config()
const validator = require('validator');
const mysql = require('mysql2/promise');
const app = express();
const PORT =  process.env.PORT
const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password:process.env.PASSWORD,
  database: process.env.DATABASE,
};

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email } = req.body;

  if (validator.isEmail(email)) {
    const sanitizedEmail = validator.normalizeEmail(email);

    try {
      const connection = await mysql.createConnection(dbConfig);
      const [results, fields] = await connection.execute(
        'INSERT INTO emails (email) VALUES (?)',
        [sanitizedEmail]
      );
      connection.end();

      res.send('E-mail inserido no banco de dados: ' + sanitizedEmail);
    } catch (error) {
      console.error('Erro ao inserir o e-mail no banco de dados:', error);
      res.status(500).send('Erro interno ao inserir o e-mail no banco de dados');
    }
  } else {
    res.status(400).send('Formato de e-mail inválido');
  }
});


app.get("/emails", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [results, fields] = await connection.execute('SELECT * FROM emails ORDER BY id DESC');
    connection.end();

    res.send({ emails: results });

  } catch (error) {
    console.error('Erro ao obter os e-mails:', error);
    res.status(500).send('Erro interno ao obter os e-mails');
  }
});

async function createDatabaseAndTableIfNotExists() {
  try {
    const connectionWithoutDB = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
    });

    await connectionWithoutDB.query('CREATE DATABASE IF NOT EXISTS redway');

    connectionWithoutDB.end();

    const connection = await mysql.createConnection(dbConfig);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS emails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL
      )
    `);

    connection.end();
  } catch (error) {
    console.error('Erro ao criar o banco de dados ou tabela:', error);
  }
}


app.listen(PORT, async () => {
  await createDatabaseAndTableIfNotExists();
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
