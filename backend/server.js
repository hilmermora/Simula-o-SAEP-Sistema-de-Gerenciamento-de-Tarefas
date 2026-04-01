const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/usuarios", require("./routes/usuarios"));
app.use("/tarefas", require("./routes/tarefas"));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
