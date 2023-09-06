import React, { FC, useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { NullLiteral } from 'typescript';


type ParentProps = {
    children: React.ReactNode;
}

type ITask = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type ContextValueType = {
    tasks: ITask[];
    setTasks: (val: ITask[]) => void;
    currentTask: ITask | null;
    setCurrentTask: (val: (ITask | null)) => void;
    value: string;
    setValue: (val: string) => void;
    focusedBtn: number;
    setFocusedBtn: (val: number) => void;
};

const Context = createContext<ContextValueType | undefined>(undefined);


const Parent: FC<ParentProps> = ({ children }) => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [currentTask, setCurrentTask] = useState<ITask | null>(null);
    const [value, setValue] = useState<string>('')
    const [focusedBtn, setFocusedBtn] = useState<number>(-1);


    const contextValue: ContextValueType = {
        tasks,
        setTasks,
        currentTask,
        setCurrentTask,
        value, 
        setValue,
        focusedBtn,
        setFocusedBtn
    };

    useEffect(() => {
        (async() => {
            const response: any = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=80');
            setTasks(response.data);
        })()
    }, [])

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export const useTask = (): ContextValueType => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error("useAction must be used within a Parent component");
    }
    return context;
}  

export default Parent;