import React, { FC } from 'react';
import { Container, BtnCancel, BtnAdd } from './btnGroup.style';

type BtnGroupProps = {
    first: string;
    last: string;
    action: string;
    close: () => void;
    handleAction: () => void;
}


const BtnGroup: FC<BtnGroupProps> = ({first, last, action, close, handleAction}) => {
    const leftBtnHandler = () => {
        if(action === 'deleteTask'){
            handleAction()
        } else {
            close()
        }

    }

    const rightBtnHandler = () => {
        if(action === 'editTask'){
            handleAction()
        } 
    }

    return (
        <Container>
            <BtnCancel onClick={leftBtnHandler}>
                <p>{first}</p>
            </BtnCancel>
            <BtnAdd onClick={rightBtnHandler}>
                <p>{last}</p>
            </BtnAdd>
        </Container>
    )
}

export default BtnGroup;