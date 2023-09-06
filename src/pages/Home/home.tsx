import React, { FC, useState } from 'react';
import { Container, Body, Greeting, SubText, Tasks, Task, Footer, Input } from './home.style';
import { Header, Calendar, Modal, Pagination } from '../../components';
import { getGreeting } from '../../utils/greeting';
import { useTask } from '../../hooks/useTask';
import { useModal } from '../../hooks/useModal';

type ITask = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Home: FC = () => {
    const {tasks, setTasks, setCurrentTask, focusedBtn, setFocusedBtn} = useTask();
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
        setShowDeleteTask(true);
    }

    return (
        <Container>
            <Modal 
                visible={showAddTask} 
                title='Add Task' 
                btnTxt1='Cancel' 
                btnTxt2='Add' 
                edit={false} 
                action='addTask' 
            />

            <Modal 
                visible={showDeleteTask} 
                title='' 
                btnTxt1='Delete' 
                btnTxt2='Edit' 
                edit={true} 
                action='deleteTask' 
            />
            <Modal 
                visible={showEditTask} 
                title='Edit Task' 
                btnTxt1='Cancel' 
                edit={false} 
                btnTxt2='Save' 
                action='editTask' 
            />
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
                                            <p>timer</p>
                                        </div>
                                    </div>
                                    <p>Today</p>
                                </Task>
                            ))
                        }
                    </div>
                </Tasks>
            </Body>
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