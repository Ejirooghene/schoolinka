import React, { FC } from 'react';
import { Container } from './modalHeader.style';

type ModalHeaderProps = {
    title: string;
    close: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = ({ title, close }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <img src='svgs/close.svg' width='24px' height='24px' onClick={close} />
        </Container>
    )
}

export default ModalHeader;