import React, { FC } from 'react';
import { Container, BtnCancel, BtnAdd } from './btnGroup.style';
import { useAction } from '../../hooks/useAction';

type BtnGroupProps = {
    first: string;
    last: string;
    action: string;
}


const BtnGroup: FC<BtnGroupProps> = ({first, last, action}) => {
    const { leftBtnHandler, rightBtnHandler } = useAction();

    return (
        <Container>
            <BtnCancel onClick={() => leftBtnHandler(action)}>
                <p>{first}</p>
            </BtnCancel>
            <BtnAdd onClick={() => rightBtnHandler(action)}>
                <p>{last}</p>
            </BtnAdd>
        </Container>
    )
} 

export default BtnGroup;