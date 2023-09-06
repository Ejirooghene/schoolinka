import React, { FC } from 'react';
import { Container } from './modalHeader.style';
import { useTask } from '../../hooks/useTask';
import { useModal } from '../../hooks/useModal';

type ModalHeaderProps = {
    title: string;
    action: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ title, action }) => {
    const { setValue } = useTask();
    const { setShowAddTask, setShowDeleteTask, setShowEditTask } = useModal();

    const close = () => {
        switch(action){
            case 'addTask':
                setValue('');
                setShowAddTask(false);
                break;
            case 'deleteTask':
                setShowDeleteTask(false);
                break;
            case 'editTask':
                setValue('');
                setShowEditTask(false);
                break;
        }
    }
    return (
        <Container>
            <h2>{title}</h2>
            <img src='svgs/close.svg' width='24px' height='24px' onClick={close} />
        </Container>
    )
}

export default ModalHeader;