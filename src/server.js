const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve os arquivos estáticos do Vue.js a partir do diretório correto
app.use(express.static(path.join(__dirname, "app", "views", "dist")));

// Rota para renderizar o index.html do Vue.js
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app", "views", "dist", "index.html"));
});

// Rota para receber dados do formulário de registro
app.post('/registration', (req, res) => {
  const formData = req.body;
  console.log('Dados recebidos:', formData);
  // Processamento dos dados recebidos
  res.status(200).json({ message: 'Dados recebidos com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend está rodando em http://localhost:${PORT}`);
});
