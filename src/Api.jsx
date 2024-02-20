export const url = "http://127.0.0.1:8000";
import axios from "axios";

export function GET_ITENS() {
  return axios.get(`${url}/produtos`);
}

export async function POST_PRODUTO(body) {
  try {
    return await axios.post(`${url}/produtos`, body).then(() => {
      console.log("Produto Adicionado");
    });
  } catch (error) {
    console.error("Erro ao enviar produto: ", error);
  }
}
export async function DELETAR_ITEM(id) {
  if (id)
    try {
      return await axios.delete(`${url}/produtos/{produto_id}?id=${id}`, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Erro ao deletar produto: ", error.response.data);
    }
}
export async function ATUALIZA_ITEM(id, body) {
  try {
    return await axios.put(`${url}/produtos/{produto_id}?id=${id}`, body);
  } catch (error) {
    console.error("Erro ao atualizar produto: ", error);
  }
}
export async function BUSCA_PRODUTO(item, setDados) {
  if (item)
    try {
      return await axios.get(`${url}/produtos/${item}`).then((json) => {
        setDados(json.data);
      });
    } catch (error) {
      console.error("Erro ao buscar o produto: ", error);
    }
}
