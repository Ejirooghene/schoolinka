import React, { FC } from 'react';
import { Container, BtnCancel, BtnAdd } from './btnGroup.style';

type BtnGroupProps = {
    first: string;
    last: string;
    handleAction: (action: string) => void;
}

const BtnGroup: FC<BtnGroupProps> = ({first, last, handleAction}) => {
    return (
        <Container>
            <BtnCancel>
                <p>{first}</p>
            </BtnCancel>
            <BtnAdd onClick={handleAction}>
                <p>{last}</p>
            </BtnAdd>
        </Container>
    )
}

export default BtnGroup;