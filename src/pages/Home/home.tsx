import React, { FC, useState } from 'react';
import { Container, Body, Greeting, SubText, Tasks, Task, Footer, Input } from './home.style';
import { Header, Calendar, AddTask } from '../../components';

type ITask = {
    task: string;
    start: string;
    end: string;
    completed: boolean;
}

const Home: FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {
            task: 'Create Wireframe',
            start: '10:30am',
            end: '11:30am',
            completed: false,
        },
        {
            task: 'Go shopping',
            start: '10:30am',
            end: '11:30am',
            completed: false,
        },
        {
            task: 'Coding challenge',
            start: '10:30am',
            end: '11:30am',
            completed: false,
        },
        {
            task: 'Vercel deployment',
            start: '10:30am',
            end: '11:30am',
            completed: false,
        },

    ])
    const [focused, setFocused] = useState<number>(0);
    const [showAddTask, setShowAddTask] = useState<boolean>(false);

    const toggleCheck = (index: number) => {
        setTasks((prevState) => {
            const updatedState = [...prevState];
            
            updatedState[index] = {
                ...updatedState[index],  
                completed : !updatedState[index].completed
            }

            return updatedState;
        })
    }

    const handleFocus = (index: number) => {
        setFocused(index);
    }

    return (
        <Container>
            { showAddTask && <AddTask addTask={() => setShowAddTask(false)} /> }
            <Header />
            <Body>
                <Greeting>Good morning!</Greeting>
                <SubText>You got some task to do.</SubText>
                <Calendar />
                <Tasks>
                    <h2>My Tasks</h2>
                    {
                        tasks.map((task: ITask, index) => (
                            <Task completed={task.completed} focused={index === focused} onClick={() => handleFocus(index)} key={task.task}>
                                <div>
                                    <img src={`svgs/${task.completed ? 'check' : 'uncheck'}.svg`} width='20px' height='20px' onClick={() => toggleCheck(index)} />
                                    <div>
                                        <h4>{task.task}</h4>
                                        <p>{task.start} - {task.end}</p>
                                    </div>
                                </div>
                                <p>Today</p>
                            </Task>
                        ))
                    }
                </Tasks>
            </Body>
            <Footer>
                <Input onClick={() => setShowAddTask(true)}>
                    <p>Input task</p>
                    <img src='svgs/mic.svg' width='20px' height='20px' />
                </Input>
            </Footer>
        </Container> 
    )
}

export default Home;