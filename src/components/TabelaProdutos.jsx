import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { DELETAR_ITEM, ATUALIZA_ITEM, BUSCA_PRODUTO, GET_ITENS } from "../Api";
import { capitalize } from "lodash";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./tabela.module.css";

const TabelaProdutos = ({ info }) => {
  const [dados, setDados] = React.useState(null);

  const [novoCodigo, setNovoCodigo] = React.useState("");
  const [novaCor, setNovaCor] = React.useState("");
  const [novoTitulo, setNovoTitulo] = React.useState("");
  const [novaData, setNovaData] = React.useState("");
  const [novoGenero, setNovoGenero] = React.useState("");

  const [atualiza, setAtualiza] = React.useState(false);
  const [indexProduto, setIndex] = React.useState(null);

  const [item, setItem] = React.useState("");

  React.useEffect(() => {
    GET_ITENS().then((json) => {
      setDados(json.data);
    });
  }, [info]);

  function getIndex(index) {
    setIndex(index);
    setAtualiza(true);
  }

  if (dados)
    return (
      <>
        <ListGroup>
          <div className={`${style.cabecalho} ${style.tabela} `}>
            <ListGroup.Item
              className={`${style.linha} ${style.itemHead} ${style.none}`}
            >
              Linha
            </ListGroup.Item>
            <ListGroup.Item
              className={`${style.codigo} ${style.itemHead} ${style.none}`}
            >
              Código
            </ListGroup.Item>
            <ListGroup.Item
              className={`${style.titulo} ${style.itemHead} ${style.none}`}
            >
              Título
            </ListGroup.Item>
            <ListGroup.Item
              className={`${style.cor} ${style.itemHead} ${style.none}`}
            >
              Cor
            </ListGroup.Item>
            <ListGroup.Item
              className={`${style.data} ${style.itemHead} ${style.none}`}
            >
              Data
            </ListGroup.Item>
            <ListGroup.Item
              className={`${style.genero} ${style.itemHead} ${style.none}`}
            >
              Categoria
            </ListGroup.Item>
            <ListGroup.Item className={`${style.filtro} ${style.itemHead}`}>
              <div className={style.filtroBox}>
                <input
                  type="text"
                  className={style.inputBusca}
                  onChange={({ target }) => {
                    setItem(target.value);
                  }}
                />
                <button
                  title="Buscar"
                  className={style.busca}
                  onClick={() => {
                    setDados(null);
                    BUSCA_PRODUTO(item, setDados);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ece7e7"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </div>
            </ListGroup.Item>
          </div>
        </ListGroup>

        {dados.map((item, index) => (
          <ListGroup key={index} className={style.body}>
            <div key={item.id} className={style.cabecalho}>
              <ListGroup.Item action className={style.linha}>
                {index + 1}
              </ListGroup.Item>
              <ListGroup.Item action className={style.codigo}>
                {atualiza && indexProduto === index ? (
                  <Input
                    type={"text"}
                    onChange={({ target }) => setNovoCodigo(target.value)}
                    valor={novoCodigo}
                  />
                ) : (
                  <span>{item.codigo}</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item action className={style.titulo}>
                {atualiza && indexProduto === index ? (
                  <Input
                    valor={novoTitulo}
                    type={"text"}
                    onChange={({ target }) => setNovoTitulo(target.value)}
                  />
                ) : (
                  <span>{capitalize(item.titulo)}</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item action className={style.cor}>
                {atualiza && indexProduto === index ? (
                  <Input
                    valor={novaCor}
                    type={"text"}
                    onChange={({ target }) => setNovaCor(target.value)}
                  />
                ) : (
                  <span>{capitalize(item.cor)}</span>
                )}
              </ListGroup.Item>

              <ListGroup.Item action className={style.data}>
                {atualiza && indexProduto === index ? (
                  <Input
                    valor={novaData}
                    type={"text"}
                    onChange={({ target }) => setNovaData(target.value)}
                  />
                ) : (
                  <span>{item.data}</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item
                action
                className={`${
                  item.categoria === "masculino"
                    ? style.masculino
                    : "" || item.categoria === "Masculino"
                    ? style.masculino
                    : "" || item.categoria === "cameba"
                    ? style.cameba
                    : "" || item.categoria === "Cameba"
                    ? style.cameba
                    : "" || item.categoria === "infantil"
                    ? style.infantil
                    : "" || item.categoria === "Infantil"
                    ? style.infantil
                    : "" || item.categoria === "feminino"
                    ? style.feminino
                    : "" || item.categoria === "Feminino"
                    ? style.feminino
                    : "" ||
                      item.categoria != "masculino" ||
                      "cameba" ||
                      "infantil" ||
                      "feminino"
                    ? style.outros
                    : ""
                } ${style.genero}`}
              >
                {atualiza && indexProduto === index ? (
                  <Input
                    valor={novoGenero}
                    type={"text"}
                    onChange={({ target }) => setNovoGenero(target.value)}
                  />
                ) : (
                  <span>{capitalize(item.categoria)}</span>
                )}
              </ListGroup.Item>

              <ListGroup.Item action className={`${style.filtro}`}>
                <div className={`${style.botoes}`}>
                  <button
                    title="Editar"
                    className={`${style.botao}`}
                    onClick={() => {
                      getIndex(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </button>
                  <button
                    title="Excluir"
                    className={`${style.botao}`}
                    onClick={async () => {
                      console.log(item.id);
                      await DELETAR_ITEM(item.id);
                      await GET_ITENS().then((json) => {
                        setDados(json.data);
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </div>
              </ListGroup.Item>

              {atualiza && indexProduto === index ? (
                <ListGroup.Item className={`${style.botaoAtualizaBox}`}>
                  <button
                    title="Atualizar"
                    className={`${style.botaoAtualiza}`}
                    onClick={async () => {
                      const novoProduto = {
                        codigo: novoCodigo,
                        cor: novaCor,
                        titulo: novoTitulo,
                        data: novaData,
                        categoria: novoGenero,
                      };

                      ATUALIZA_ITEM(item.id, novoProduto);
                      setAtualiza(false);
                      setNovaData("");
                      setNovoCodigo("");
                      setNovaCor("");
                      setNovoTitulo("");
                      setNovoGenero("");
                      await GET_ITENS().then((json) => {
                        setDados(json.data);
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </button>
                </ListGroup.Item>
              ) : (
                ""
              )}
            </div>
          </ListGroup>
        ))}
      </>
    );
};

export default TabelaProdutos;
