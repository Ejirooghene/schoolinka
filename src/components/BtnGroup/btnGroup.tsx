import React, { FC } from 'react';
import { Container, BtnCancel, BtnAdd } from './btnGroup.style';

type BtnGroupProps = {
    first: string;
    last: string;
}

const BtnGroup: FC<BtnGroupProps> = ({first, last}) => {
    return (
        <Container>
            <BtnCancel>
                <p>{first}</p>
            </BtnCancel>
            <BtnAdd>
                <p>{last}</p>
            </BtnAdd>
        </Container>
    )
}

export default BtnGroup;