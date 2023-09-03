import React, { FC } from 'react';
import { Modal, TextInput, Reminder, DateTime, Task, Date, Time } from './action.style';
import ModalHeader from '../ModalHeader/modalHeader';
import BtnGroup from '../BtnGroup/btnGroup';

type ActionProps = {
    title: string;
    btnTxt1: string;
    btnTxt2: string;
    edit: boolean;
    action: () => void;
}

const Action: FC<ActionProps> = ({ title, btnTxt1, btnTxt2, edit = false, action }) => {
    return (
        <Modal>
            <ModalHeader title={title} close={action} />
            {
                edit ? 
                <>
                    <Task>Create Wireframe</Task>
                    <Date>
                        <img src='svgs/bluecalendar.svg' width='20px' height='20px' />
                        <p>20th January 2023</p>
                    </Date>
                    <Time>
                        <img src='svgs/blueclock.svg' width='20px' height='20px' />
                        <p>8:00am - 11:00am</p>
                    </Time>
                </>
                :
                <>
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
                </>
            }
            <BtnGroup first={btnTxt1} last={btnTxt2} />
        </Modal>    
    )
}

export default Action;