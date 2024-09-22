import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BootstrapDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={openDialog}>
        Open Dialog
      </Button>

      <Modal show={isOpen} onHide={closeDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a dialog using React Bootstrap in React.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BootstrapDialog;
