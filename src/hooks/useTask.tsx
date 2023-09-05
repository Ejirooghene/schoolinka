import React, { FC, useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const Context = createContext<any>([]);

type ParentProps = {
    children: React.ReactNode;
}

type ITask = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}



const Parent: FC<ParentProps> = ({ children }) => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [currentTask, setCurrentTask] = useState<ITask | null>(null);

    useEffect(() => {
        (async() => {
            const response: any = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=80');
            setTasks(response.data);
        })()
    }, [])

    return (
        <Context.Provider value={[tasks, setTasks, currentTask, setCurrentTask]}>
            {children}
        </Context.Provider>
    )
}

export const useTask = () => {
    return useContext(Context); 
}

export default Parent;