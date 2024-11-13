import React, { useState } from "react";
import { Button, Heading } from "components/ui";
import { useLinkClickHandler } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { useLanguage } from 'lib/hooks/useLanguage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useLanguage();

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const openNewWindow = () => {
    window.open('https://github.com/BartekDadas?tab=repositories', '_blank', 'noopener,noreferrer');
  };

  return (
    <div {...props} className={`${props.className} flex justify-center items-center py-5 bg-green-a700`}>
      <div className="mx-auto flex w-full max-w-[1376px] items-center justify-between gap-5 md:px-5 sm:flex-col">
        <div className="flex items-center gap-4">
          <Heading as="h4" className="self-end text-[24px] font-bold text-white-a700 md:text-[22px] sm:self-auto">
            {t('header.portfolio')}
          </Heading>
          <LanguageSwitcher />
        </div>
        <div className="flex w-[22%] justify-center gap-3.5 sm:w-full">
          <Button shape="round" className="w-full min-w-[78px] max-w-[78px] rounded-[20px] px-3.5" onClick={useLinkClickHandler('/')}>
            {t('header.home')}
          </Button>
          <Button shape="round" className="w-full max-w-[94px] flex-1 rounded-[20px] px-3.5" onClick={openNewWindow}>
            {t('header.projects')}
          </Button>
          <Button shape="round" className="w-full max-w-[92px] flex-1 rounded-[20px] px-3.5" onClick={openDialog}>
            {t('header.contact')}
          </Button>
        </div>
      </div>
      <Modal show={isOpen} onHide={closeDialog}>
        <Modal.Header closeButton>
          <Modal.Title>{t('contact.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{t('contact.phone')}: +48 530 922 851</div>
          <div className="email-link">{t('contact.email')}: <a href="mailto:bartosz.dadas@wp.pl">bartosz.dadas@wp.pl</a></div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
};

export default Header;