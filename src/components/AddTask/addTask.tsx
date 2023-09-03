import React, { FC } from 'react';
import { Container, Modal, Header, TextInput, Reminder, BtnGroup, BtnCancel, BtnAdd, DateTime } from './addTask.style';

type AddTaskProps = {
    addTask: () => void;
}

const AddTask: FC<AddTaskProps> = ({ addTask }) => {
    return (
        <Container>
            <Modal>
                <Header>
                    <h2>Add Task</h2>
                    <img src='svgs/close.svg' width='24px' height='24px' onClick={addTask} />
                </Header>
                <TextInput />
                <DateTime>
                    <div>
                        <img src='svgs/calendar.svg' width='20px' height='20px' />
                        <p>Today</p>
                    </div>
                    <div>
                        <img src='svgs/clock.svg' width='20px' height='20px' />
                        <p>00:00</p>
                    </div>
                    <div>
                        <img src='svgs/clock.svg' width='20px' height='20px' />
                        <p>00:00</p>
                    </div>
                </DateTime>
                <Reminder>
                    <div>
                        <img src='svgs/bell.svg' width='24px' height='24px' />
                        <p>10 minute before</p>
                    </div>
                    <img src='svgs/close.svg' width='20px' height='20px' />
                </Reminder>
                <BtnGroup>
                    <BtnCancel>
                        <p>Cancel</p>
                    </BtnCancel>
                    <BtnAdd>
                        <p>Add</p>
                    </BtnAdd>
                </BtnGroup>
            </Modal>    
        </Container>
    )
}

export default AddTask;