import connection from './conexao.js';

export function read(callback){
 connection.query('SELECT * from cadastramento', callback);
 
}
export function create(nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao, callback){ 
connection.query('INSERT INTO cadastramento (nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
,[nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao], callback);
}
export function update(id, novosDados, callback){
    const { nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao } = novosDados;
    connection.query('UPDATE cadastramento SET nome = ?, cpf = ?, endereco = ?, bairro = ?, complemento = ?,no_app = ?, dat_nasc = ?, telefone = ?, e_mail = ?, profissao = ? WHERE idCadastramento = ?', [nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao, id], callback);

}
export function deletePes(id, callback){
    connection.query('DELETE FROM cadastramento WHERE idCadastramento = ?', [id], callback);
}
