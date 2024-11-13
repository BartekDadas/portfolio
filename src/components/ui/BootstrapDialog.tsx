import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BootstrapDialogProps {
  title?: string;
  content?: React.ReactNode;
}

const BootstrapDialog: React.FC<BootstrapDialogProps> = ({ 
  title = 'Dialog',
  content = 'This is a dialog using React Bootstrap in React.'
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={openDialog}>
        Open Dialog
      </Button>

      <Modal show={isOpen} onHide={closeDialog}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BootstrapDialog;