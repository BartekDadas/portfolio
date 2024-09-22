import { Button, Heading } from "components/ui";
import React, {useState} from "react";
import { useLinkClickHandler, Link } from "react-router-dom";
import { Modal, Button as BootstrapButton} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Header({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const openNewWindow = () => {
    window.open('https://github.com/BartekDadas?tab=repositories', '_blank', 'noopener,noreferrer');
  };

  return (
    <div {...props} className={`${props.className} flex justify-center items-center py-5 bg-green-a700`}>
      <div className="mx-auto flex w-full max-w-[1376px] items-center justify-between gap-5 md:px-5 sm:flex-col">
        <Heading as="h4" className="self-end text-[24px] font-bold text-white-a700 md:text-[22px] sm:self-auto">
          My Portfolio
        </Heading>
        <div className="flex w-[22%] justify-center gap-3.5 sm:w-full">
          <Button shape="round" className="w-full min-w-[78px] max-w-[78px] rounded-[20px] px-3.5" onClick={useLinkClickHandler('/')}>
            Home
          </Button>
          <Button shape="round" className="w-full max-w-[94px] flex-1 rounded-[20px] px-3.5" onClick={openNewWindow}>
            Projects
          </Button>
          <Button shape="round" className="w-full max-w-[92px] flex-1 rounded-[20px] px-3.5" onClick={openDialog}>
            Contact
          </Button>
        </div>
      </div>
      <div>  
        <Modal show={isOpen} onHide={closeDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Contact me</Modal.Title>
          </Modal.Header>
          <Modal.Body><div>tel. +48 530 922 851</div><div className="email-link">email: <a href="mailto: bartosz.dadas@wp.pl">bartosz.dadas@wp.pl</a></div></Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>  
    </div>
  );
}
