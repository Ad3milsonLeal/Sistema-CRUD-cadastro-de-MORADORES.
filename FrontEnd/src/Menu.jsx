import React, { useState } from "react";
import "../css/Menu.css"
import Cadastrar from './Cadastrar';
import Consultar from './Consultar';
import Atualizar from './Atualizar';
import Deletar from './Deletar';

function Menu() {
    const [pagina, setPagina] = useState("menu");

    const retorne = () => {
        setPagina("menu")
    }

    return (

        <div className="front">
            <center>
                <div className="mp">
                    <br />

                    <h1> !!! " M E N U " !!! </h1>
                    <h1> !!! "  P R I N C I P A L " !!! </h1><br />
                    <br />
                    <img src="imag-A2.jpg" alt="" />
                    <br />
                    <br />
                    <br />
                    {pagina === "menu" ? (
                        <div>
                            <button onClick={() => setPagina("cadastro")}>CADASTRAR </button><br />
                            <br />
                            <button onClick={() => setPagina("atualizar")}>ATUALIZAR </button><br />
                            <br />
                            <button onClick={() => setPagina("consultar")}>CONSULTAR</button><br />
                            <br />
                            <button onClick={() => setPagina("deletar")}>DELETAR </button><br />
                            <br />
                        </div>
                    ) : pagina === "cadastro" ? (
                        <div>
                            <Cadastrar />
                            <br />
                            <button onClick={retorne}>VOLTAR</button>
                        </div>
                    ) : pagina === "atualizar" ? (
                        <div>
                            <Atualizar />
                            <br />
                            <button onClick={retorne}>VOLTAR</button>
                        </div>
                    ) : pagina === "consultar" ? (
                        <div>
                            <Consultar />
                            <br />
                            <button onClick={retorne}>VOLTAR</button>
                        </div>
                    ) : (
                        <div>
                            <Deletar />
                            <br />
                            <button onClick={retorne}>VOLTAR</button>
                        </div>
                    )}

                </div>

            </center>
        </div>

    );
}

export default Menu;
