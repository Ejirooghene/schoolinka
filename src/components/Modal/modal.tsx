import React, { FC } from 'react';
import { Container } from './modal.style';
import Action from '../Action/action';

type ModalProps = {
    visible: boolean;
    title: string;
    btnTxt1: string;
    btnTxt2: string;
    edit: boolean;
    action: string;
    close: () => void;
}

const Modal: FC<ModalProps> = ({visible, title, btnTxt1, btnTxt2, edit, action, close }) => {
    return (
        <Container visible={visible}>
           <Action title={title} btnTxt1={btnTxt1} btnTxt2={btnTxt2} edit={edit} action={action} close={close}  />
        </Container>
    )
}

export default Modal;