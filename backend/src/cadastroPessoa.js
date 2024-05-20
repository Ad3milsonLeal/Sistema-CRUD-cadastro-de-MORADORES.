class cadastroPessoa {
    constuctor (nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.bairro = bairro;
        this.complemento = complemento;
        this.no_app = no_app;
        this.dat_nasc = dat_nasc;
        this.telefone = telefone;
        this.e_mail = e_mail;
        this.profissao = profissao;
    }
    getNome(){
        return this.nome;
    }
    setNome(novoNome){
        this.nome = novoNome;
    
    }
   
    getCPF(){
        return this.cpf;
    
    }
    setCPF(novoCPF){
        this.cpf = novoCPF;
    
    }
    getEnd(){
        return this.endereco;
    
    }
    setEnd(novoEnd){
        this.endereco = novoEndereco;
    
    }
    getBairro(){
        return this.bairro;
    }
    setBairro(novoBairro){
        this.bairro = novoBairro;
    }
    getComplemento(){
        return this.complemento;
    }
    setComplemento(novoComplemento){
        this.complemento = novoComplemento;
    }
    getNo_app(){
        return this.no_app;
    }
    setNo_app(novoNo_app){
        this.no_app = novoNo_app;
    }
    getDat_nasc(){
        return this.dat_nasc;
    }
    setDat_nasc(novoDat_nasc){
        this.dat_nasc = novoDat_nasc;
    }
    getTelefone(){
        return this.telefone;
    }
    setTelefone(novoTelefone){
        this.tefone = novoTelefone;
    }
    getE_mail(){
        return this.e_mail;
    }
    setE_mail(novoE_mail){
        this.e_mail = novoE_mail;
    }
    getProfissao(){
        return this.Profissao;
    }
    setProfissao(novoProfissao){
        this.profissao = novoProfissao;
    }
    }
export default cadastroPessoa;