import express from "express";
const app = express();
import cors from "cors";
import connection from "./conexao.js";

app.use(express.json ());
app.use(cors());

app.post('/cadastrarPessoa', async (req, res) => {
    const nome = req.body.nome;   
    const cpf = req.body.cpf;   
    const endereco = req.body.endereco;
    const bairro = req.body.bairro;
    const complemento = req.body.complemento;
    const no_app = req.body.no_app;
    const dat_nasc = req.body.dat_nasc;
    const telefone = req.body.telefone;
    const e_mail = req.body.e_mail;
    const profissao = req.body.profissao;

   
    const sql = 'INSERT INTO cadastramento (nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
    connection.query(sql, [nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao], (error, results, fields) => {
        if (error) {
            console.log('ERRO AO INSERIR OS DADOS' + error.stack);
            res.status(500).send('ERRO AO INSERIR OS DADOS NO BANCO DE DADOS.');
            return
        }
        console.log('DADOS INSERIDOS COM SUCESSO.ID:', results.insertId);
        res.status(200).send('DADOS CADASTRADO COM SUCESSO!');

    });
});



app.listen(3000, () => {
    console.log(`SEVIDOR EXPRESS RODANDO NA PORTA 3000`);
});
