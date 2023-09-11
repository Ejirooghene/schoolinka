import React, { FC, useEffect, useState } from 'react';
import Modal from '../Modal/modal';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { Container, TextInput, Reminder, DateTime, Task, Date, Time } from './action.style';
import ModalHeader from '../ModalHeader/modalHeader';
import BtnGroup from '../BtnGroup/btnGroup';
import { useTask } from '../../hooks/useTask';
import { getToday, strikeThroughReminder } from '../../utils/date';

type ActionProps = {
    title: string;
    btnTxt1: string;
    btnTxt2: string;
    edit: boolean;
    action: string;
}

const Action: FC<ActionProps> = ({ title, btnTxt1, btnTxt2, edit, action }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [showStartModal, setShowStartModal] = useState<boolean>(false);
    const [showStopModal, setShowStopModal] = useState<boolean>(false);
    const {currentTask, value, setValue, date, setDate, start, setStart, stop, setStop, addReminder, setAddReminder, strikeReminder, setStrikeReminder} = useTask();

    return (
        <>
            <Container>
            <Modal
            visible={visible}
            isDefault={false}
            >
                <DateCalendar 
                disablePast
                className='dateTime'
                onChange={(val: any) => {
                    setDate(`${val.$y}/${val.$M + 1}/${val.$D}`);
                    setVisible(false);
                }}
                />
            </Modal>
            <Modal
            visible={showStartModal}
            isDefault={false}
            >
                <TimeClock 
                disablePast
                ampmInClock
                className='dateTime'
                onChange={(val: any, status: any) => {
                    setStart(`${String(val.$H).padStart(2, '0')}:${String(val.$m).padStart(2, '0')}`);
                    if (status === 'finish') {
                        setStrikeReminder(strikeThroughReminder(date, `${String(val.$H).padStart(2, '0')}:${String(val.$m).padStart(2, '0')}`));
                        setShowStartModal(false);
                    }
                }}
                />
            </Modal>
            <Modal
            visible={showStopModal}
            isDefault={false}
            >
                <TimeClock 
                ampmInClock
                className='dateTime'
                onChange={(val: any, status: any) => {
                    setStop(`${String(val.$H).padStart(2, '0')}:${String(val.$m).padStart(2, '0')}`);
                    if (status === 'finish') {
                        setShowStopModal(false);
                    }
                }}
                />
            </Modal>
            { 
                visible &&  <DateCalendar 
                disablePast
                onChange={(val: any) => {
                    setDate(`${val.$y}/${val.$M + 1}/${val.$D}`);
                    setVisible(false);
                }}
                className='date'
                />
            }
            { 
                showStartModal &&  <TimeClock 
                disablePast
                ampmInClock
                className='date'
                onChange={(val: any, status: any) => {
                    setStart(`${String(val.$H).padStart(2, '0')}:${String(val.$m).padStart(2, '0')}`);
                    if (status === 'finish') {
                        setStrikeReminder(strikeThroughReminder(date, `${String(val.$H).padStart(2, '0')}:${String(val.$m).padStart(2, '0')}`));
                        setShowStartModal(false);
                    }
                }}
                />
            }
            {
                showStopModal && <TimeClock 
                ampmInClock
                className='date'
                onChange={(val: any, status: any) => {
                    setStop(`${String(val.$H).padStart(2, '0')}:${String(val.$m).padStart(2, '0')}`);
                    if (status === 'finish') {
                        setShowStopModal(false);
                    }
                }}
                />
            }

                <ModalHeader title={title} action={action} /> 
                {
                    edit ? 
                    <>
                        <Task>{currentTask?.title}</Task>
                        <Date>
                            <img src='svgs/bluecalendar.svg' width='20px' height='20px' />
                            <p>{ currentTask?.date ? getToday(currentTask?.date) : '11th September 2023'}</p>
                        </Date>
                        <Time>
                            <img src='svgs/blueclock.svg' width='20px' height='20px' />
                            <p>{currentTask?.start ? `${currentTask.start} - ${currentTask.stop}` : '08:00am - 09:00am'}</p>
                        </Time>

                    </>
                    :
                    <>
                        <TextInput
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        rows={5}  
                        />
                            <DateTime>
                            <div onClick={() => setVisible(true)}>
                                <img src='svgs/calendar.svg' width='20px' height='20px' />
                                <p>{date}</p>
                            </div>
                            <div onClick={() => setShowStartModal(true)}>
                                <img src='svgs/clock.svg' width='20px' height='20px' />
                                <p>{start}</p>
                            </div>
                            <div onClick={() => setShowStopModal(true)}>
                                <img src='svgs/clock.svg' width='20px' height='20px' />
                                <p>{stop}</p>
                            </div>
                        </DateTime>
                        {
                            addReminder && 
                            <Reminder strikeReminder={strikeReminder}>
                                <div>
                                    <img src='svgs/bell.svg' width='24px' height='24px' />
                                    <p>10 minute before</p>
                                </div>
                                <img src='svgs/close.svg' width='20px' height='20px' onClick={() => {
                                    if(strikeReminder) return 
                                    setAddReminder(false)
                                }} />
                            </Reminder>
                        }
                    </>
                }
                <BtnGroup first={btnTxt1} last={btnTxt2} action={action} />
            </Container>    
        </>
    )
}

export default Action;