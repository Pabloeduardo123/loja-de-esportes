const mysql = require('mysql2');

const host = "localhost";
const usuario = "hoot";
const senha = "";
const banco = "pkssports";

const conexao = mysql.createConnection({
    host: host,
    user: usuario,
    passorword: senha,
    database: banco
});

conexao.connect((erro) => {
    if (erro) {
        console.erro("Erro na conexao: " + erro.stack);
        return
    }
    console.log("Conectado com sucesso ao banco " + banco)
})