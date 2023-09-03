import React, { FC } from 'react';
import { Container } from './modal.style';
import Action from '../Action/action';

type ModalProps = {
    visible: boolean;
    title: string;
    btnTxt1: string;
    btnTxt2: string;
    edit: boolean;
    action: () => void;
}

const Modal: FC<ModalProps> = ({visible, title, btnTxt1, btnTxt2, edit = false, action }) => {
    return (
        <Container visible={visible}>
           <Action title={title} btnTxt1={btnTxt1} btnTxt2={btnTxt2} edit={edit} action={action}  />
        </Container>
    )
}

export default Modal;