import React from 'react'
import { Modal, Button } from "react-bootstrap";

const ModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.component}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalComponent;