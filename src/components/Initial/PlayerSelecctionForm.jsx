
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useState } from "react";


export const PlayerSelecctionForm = () => {

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  }
  
  return (
      
    <div>
      <Button auto color="warning" shadow onClick={handler}>
        COMENZAR NUEVO JUEGO
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Bienvenido a{" "}
            <Text b size={18}>
               PokeNextGame
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Tu Nombre"
            
          />
          <label>Tu Cumpleaños</label>
          <Input
            clearable
            bordered
            fullWidth
            type="date"
            color="primary"
            size="lg"
            placeholder="Fecha de cumpleaños"
            
          />
          
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto onClick={closeHandler}>
            Listo!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}
