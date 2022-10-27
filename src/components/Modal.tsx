import React from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/svg/close-icon.svg';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible = false, children, onClose = () => {} }) => {
  return (
    <>
      {visible && (
        <ModalContainer>
          <ModalOverlay onClick={onClose} data-testid="modal-wrapper"></ModalOverlay>
          <ModalWindow>
            <ButtonClose onClick={onClose} data-testid="modal-close" />
            <ModalMessage>{children}</ModalMessage>
          </ModalWindow>
        </ModalContainer>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--modal-background);
  z-index: 100;
`;

const ModalWindow = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  margin: 20px;
  border: 1px solid var(--primary);
  background-color: var(--main-background);
  border-radius: 20px;
  z-index: 101;
`;

const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: url(${closeIcon}) transparent no-repeat;
  border: 0;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    filter: brightness(100%);
  }
`;

const ModalMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Modal;
