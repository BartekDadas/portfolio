import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BootstrapDialogProps {
  defaultTitle?: string;
  defaultContent?: React.ReactNode;
}

export interface BootstrapDialogHandle {
  openDialog: (content: React.ReactNode, title: string) => void;
  closeDialog: () => void;
}

const BootstrapDialog = forwardRef<BootstrapDialogHandle, BootstrapDialogProps>(
  ({ defaultTitle = 'Dialog', defaultContent = 'This is a dialog' }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(defaultTitle);
    const [content, setContent] = useState<React.ReactNode>(defaultContent);

    // Open dialog with specific content and title
    const openDialog = (newContent: React.ReactNode, newTitle: string) => {
      setContent(newContent);
      setTitle(newTitle);
      setIsOpen(true);
    };

    // Close dialog
    const closeDialog = () => setIsOpen(false);

    // Expose openDialog and closeDialog methods to parent components
    useImperativeHandle(ref, () => ({
      openDialog,
      closeDialog
    }));

    return (
      <Modal show={isOpen} onHide={closeDialog}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeDialog}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
);

export default BootstrapDialog;
