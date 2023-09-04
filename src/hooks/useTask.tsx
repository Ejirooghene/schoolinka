import React, { FC, useState, createContext, useContext } from 'react';

const Context = createContext<any>([]);

type ParentProps = {
    children: React.ReactNode;
}

type ITask = {
    task: string;
    start: string;
    end: string;
    completed: boolean;
}

const Parent: FC<ParentProps> = ({ children }) => {
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
        {
            task: 'Vercel download',
            start: '10:30am',
            end: '11:30am',
            completed: false,
        },

    ])

    return (
        <Context.Provider value={[tasks, setTasks]}>
            {children}
        </Context.Provider>
    )
}

export const useTask = () => {
    return useContext(Context); 
}

export default Parent;