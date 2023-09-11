import React, { FC, useState } from 'react';
import { Container, Body, Greeting, SubText, Tasks, Task, Bottom, Side, NewBtn, Footer, Input } from './home.style';
import { Header, Calendar, Modal, Pagination, Action } from '../../components';
import { getGreeting } from '../../utils/greeting';
import { moment } from '../../utils/date';
import { useTask } from '../../hooks/useTask';
import { useModal } from '../../hooks/useModal';
import { ITask } from '../../types/type';


const Home: FC = () => {
    const {tasks, setTasks, setCurrentTask, focusedBtn, setFocusedBtn, date} = useTask();
    const { showAddTask, setShowAddTask, showDeleteTask, setShowDeleteTask, showEditTask } = useModal();
    const [start, setStart] = useState<number>(0);
    const [stop, setStop] = useState<number>(10);

    const toggleCheck = (index: number) => {
        const updatedState = [...tasks];

        const currIndex = index + start;
        const updatedTask = {
            ...updatedState[currIndex],
            completed: !updatedState[currIndex].completed,
        };

        updatedState[currIndex] = updatedTask;

        setTasks([...updatedState]); 
    }
      
      

    const handleFocus = (index: number, task: ITask) => {
        // setFocused(index);
        setFocusedBtn(index);
        setCurrentTask(task); 
    }

    const doubleClickHandler = (task: ITask) => {
        setCurrentTask(task);
        setShowAddTask(false);
        setShowDeleteTask(true);
    }

    return (
        <Container>
            <Modal visible={showAddTask}>
                <Action title='Add Task' btnTxt1='Cancel' btnTxt2='Add' edit={false} action='addTask' />
            </Modal>
            <Modal visible={showDeleteTask}>
                <Action title='' btnTxt1='Delete' btnTxt2='Edit' edit={true} action='deleteTask' />
            </Modal>
            <Modal visible={showEditTask}>
                <Action title='Edit Task' btnTxt1='Cancel' btnTxt2='Save' edit={false} action='editTask' />
            </Modal>
            <Header />
            <Body>
                <Greeting>{getGreeting()}</Greeting>
                <SubText>You got some task to do.</SubText>
                <Calendar />
                <Tasks>
                    <h2>My Tasks</h2>
                    <div>
                        {
                            tasks.slice(start, stop).map((task: ITask, index: number) => (
                                <Task 
                                    completed={task.completed} 
                                    focused={index === focusedBtn} 
                                    onClick={() => handleFocus(index, task)} 
                                    onDoubleClick={() => doubleClickHandler(task)} 
                                    key={task.title}
                                >
                                    <div>
                                        <img 
                                        src={`svgs/${task.completed ? 'check' : 'uncheck'}.svg`} 
                                        width='20px' 
                                        height='20px' 
                                        onClick={() => toggleCheck(index)} />
                                        <div>
                                            <h4>{task.title}</h4>
                                            <p>{task.start || '08:00am'} - {task.stop || '09:00am'}</p>
                                        </div>
                                    </div>
                                    <p>{task.date ? moment(task.date) : 'Today'}</p>
                                </Task>
                            ))
                        }
                    </div>
                </Tasks>
                <Bottom>
                    <Pagination start={start} stop={stop} setStart={setStart} setStop={setStop} />
                </Bottom>
            </Body>
            <Side>
                <NewBtn onClick={() => setShowAddTask(true)}>
                    <img src='svgs/plus.svg' width='20px' height='20px' />
                    <p>Create New Task</p>
                </NewBtn>
                <main>
                    {   
                        showAddTask && <Action title='Add Task' btnTxt1='Cancel' btnTxt2='Add'  edit={false} action='addTask' /> }
                    {
                        showDeleteTask && <Action title='' btnTxt1='Delete' btnTxt2='Edit' edit={true} action='deleteTask' />
                    }
                    {
                        showEditTask && <Action title='Edit Task' btnTxt1='Cancel' btnTxt2='Save' edit={false} action='editTask' />
                    }
                </main>
            </Side>
            <Footer>
                <Pagination start={start} stop={stop} setStart={setStart} setStop={setStop} />
                <Input onClick={() => setShowAddTask(true)}>
                    <p>Input task</p>
                    <img src='svgs/mic.svg' width='20px' height='20px' />
                </Input>
            </Footer>
        </Container> 
    )
}

export default Home;