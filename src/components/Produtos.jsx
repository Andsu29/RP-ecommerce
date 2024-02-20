import React, { useEffect } from "react";
import Input from "./Input";
import TabelaProdutos from "./TabelaProdutos";
import style from "./produtos.module.css";
import Button from "./Button";
import { POST_PRODUTO, GET_ITENS } from "../Api";

const Produtos = () => {
  const [codigo, setCodigo] = React.useState("");
  const [titulo, setTitulo] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [data, setData] = React.useState("");
  const [categoria, setCategoria] = React.useState("");

  const [dados, setDados] = React.useState(null);

  return (
    <div className={style.container}>
      <form
        className={style.formulario}
        onSubmit={(event) => {
          event.preventDefault();

          const produtoCriado = {
            codigo: codigo,
            cor: cor.toLowerCase(),
            titulo: titulo.toLowerCase(),
            data: data,
            categoria: categoria.toLowerCase(),
          };
          POST_PRODUTO(produtoCriado);

          setCodigo("");
          setCor("");
          setTitulo("");
          setData("");
          setCategoria("");
          GET_ITENS().then((json) => {
            setDados(json.data);
          });
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="rgb(108, 53, 156)"
            className="bi bi-boxes"
            viewBox="0 0 16 16"
          >
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
          </svg>
        </div>
        <Input
          label={"Código"}
          type={"text"}
          valor={codigo}
          onChange={({ target }) => setCodigo(target.value)}
        />
        <Input
          label={"Título"}
          valor={titulo}
          type={"text"}
          onChange={({ target }) => setTitulo(target.value)}
        />
        <Input
          label={"Cor"}
          valor={cor}
          type={"text"}
          onChange={({ target }) => setCor(target.value)}
        />
        <Input
          label={"Data"}
          valor={data}
          type={"text"}
          onChange={({ target }) => setData(target.value)}
        />
        <div>
          <select
            className={style.select}
            id="categoria"
            value={categoria}
            onChange={({ target }) => setCategoria(target.value)}
          >
            <option>Categoria</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="infantil">Infantil</option>
            <option value="cameba">Cameba</option>
            <option value="acessorios">Acessórios</option>
          </select>
        </div>
        <Button>Adicionar</Button>
      </form>

      <TabelaProdutos info={dados} />
    </div>
  );
};

export default Produtos;
