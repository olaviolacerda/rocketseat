import React from 'react';
import { Children } from 'react-leaflet';
import ReactModal from 'react-modal';
import { customStyles } from './styles';

interface ModalProps {
  isOpen: boolean;
  children: Children;
  afterOpenModal(): void;
}

const Modal = ({ children, isOpen, afterOpenModal }: ModalProps) => {
  return <ReactModal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    {children}
  </ReactModal>;
}

export default Modal;