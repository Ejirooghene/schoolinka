import React, { FC } from 'react';
import { Container, BtnCancel, BtnAdd } from './btnGroup.style';
import { useModal } from '../../hooks/useModal';
import { useTask } from '../../hooks/useTask';

type BtnGroupProps = {
    first: string;
    last: string;
    action: string;
    close: () => void;
    handleAction: () => void;
    setValue: (val: string) => void;
}


const BtnGroup: FC<BtnGroupProps> = ({first, last, action, close, handleAction, setValue}) => {
    const { setShowEditTask } = useModal();
    const { currentTask } = useTask();

    const leftBtnHandler = () => {
        if(action === 'deleteTask'){
            handleAction();
            close();
        } else {
           if(currentTask){
            setValue(currentTask.title);
           }
            close();
        }

    }

    const rightBtnHandler = () => {
        if(action === 'editTask'){
            handleAction();
            close();
        } else if(action === 'addTask'){
            handleAction();
            setValue('');
            close();
        } else {
            setShowEditTask(true);
            close();
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