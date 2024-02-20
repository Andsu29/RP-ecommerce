import React from "react";
import { GET_ITENS } from "./Api";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    GET_ITENS().then((json) => {
      setDados(json.data);
    });
  }, []);

  return (
    <GlobalContext.Provider value={dados}>{children}</GlobalContext.Provider>
  );
};
