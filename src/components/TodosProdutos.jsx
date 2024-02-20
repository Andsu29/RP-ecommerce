import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "./Button";

function TodosProdutos({ dados }) {
  return (
    <div>
      {dados.map((Item, index) => (
        <ListGroup horizontal>
          <ListGroup.Item>{index}</ListGroup.Item>
          <ListGroup.Item>{Item.id}</ListGroup.Item>
          <ListGroup.Item>{Item.titulo}</ListGroup.Item>
          <ListGroup.Item>{Item.cor}</ListGroup.Item>
          <ListGroup.Item>{Item.data}</ListGroup.Item>
          <ListGroup.Item>{Item.genero}</ListGroup.Item>
          <ListGroup.Item>
            <Button>Teste</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button>Teste</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button>Teste</Button>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
}

export default TodosProdutos;
