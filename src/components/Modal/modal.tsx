import React, { FC } from 'react';
import { Container } from './modal.style';

type ModalProps = {
    visible: boolean;
    isDefault?: boolean;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ visible, isDefault = true, children }) => {
    return (
        <Container visible={visible} isDefault={isDefault}>
            {children}
        </Container>
    );
}

export default Modal;
