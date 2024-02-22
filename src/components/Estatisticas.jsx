import React, { useEffect } from "react";
import style from "./estatisticas.module.css";
import { GlobalContext } from "../GlobalContext";
import {
  VictoryPie,
  VictoryBar,
  VictoryChart,
  VictoryPortal,
  VictoryStack,
  VictoryLabel,
  VictoryAxis,
} from "victory";

const Estatisticas = () => {
  const global = React.useContext(GlobalContext);
  const [graph, setGraph] = React.useState([]);

  const produtosCategorizados = {
    masculino: [],
    feminino: [],
    infantil: [],
    cameba: [],
    outros: [],
  };

  function categorias() {
    if (global)
      global.map((produto) => {
        if (produtosCategorizados[produto.categoria]) {
          produtosCategorizados[produto.categoria].push(produto);
        } else {
          // Se a categoria não existir no objeto, adicione-a como "outra"
          produtosCategorizados.outros.push(produto);
        }
      });
    setGraph([
      {
        x: `${
          produtosCategorizados.masculino.length === 0
            ? ""
            : `Masculino: ${produtosCategorizados.masculino.length}`
        }`,
        y: produtosCategorizados.masculino.length,
      },
      {
        x: `${
          produtosCategorizados.feminino.length === 0
            ? ""
            : `Feminino: ${produtosCategorizados.feminino.length}`
        }`,
        y: produtosCategorizados.feminino.length,
      },
      {
        x: `${
          produtosCategorizados.infantil.length === 0
            ? ""
            : `Infantil: ${produtosCategorizados.infantil.length}`
        }`,
        y: produtosCategorizados.infantil.length,
      },
      {
        x: `${
          produtosCategorizados.cameba.length === 0
            ? ""
            : `Cameba: ${produtosCategorizados.cameba.length}`
        }`,
        y: produtosCategorizados.cameba.length,
      },
      {
        x: `${
          produtosCategorizados.outros.length === 0
            ? ""
            : `Outros: ${produtosCategorizados.outros.length}`
        }`,
        y: produtosCategorizados.outros.length,
      },
    ]);
  }
  React.useEffect(() => {
    categorias();
  }, [global]);

  if (global)
    return (
      <div className={style.container}>
        <h1 className={style.titulo}>Estatísticas</h1>
        <div className={style.graficos}>
          <div className={style.graph}>
            <VictoryPie
              colorScale={["#483D8B", "#DAA520", "#2E8B57", "#D2691E"]}
              cornerRadius={({ datum }) => datum.y * 5}
              data={graph}
              innerRadius={50}
              padding={{ top: 80, bottom: 80, left: 90, right: 80 }}
              style={{
                data: {
                  fillOpacity: 0.9,
                  stroke: "#fff",
                  strokeWidth: 2,
                },
                labels: {
                  fontSize: 14,
                  fill: "#333",
                },
              }}
            />
          </div>
          <div className={style.graph}>
            <VictoryChart
              domainPadding={20}
              padding={{ top: 80, bottom: 80, left: 90, right: 80 }}
            >
              <VictoryStack
                colorScale={["gold", "orange", "tomato"]}
                style={{
                  data: { width: 30 },
                  labels: { padding: -20 },
                }}
                labelComponent={
                  <VictoryPortal>
                    <VictoryLabel />
                  </VictoryPortal>
                }
              >
                {global.map((produto) => (
                  <VictoryBar
                    data={[
                      {
                        x: produto.data,
                        y: produto.data.length,
                        label: "",
                      },
                    ]}
                  />
                ))}
              </VictoryStack>
              <VictoryAxis />
            </VictoryChart>
          </div>
        </div>
        <p className={style.total}>Total de produtos: {global.length}</p>
      </div>
    );
};

export default Estatisticas;
