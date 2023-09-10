import React, { FC, useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { ITask } from '../types/type';


type ParentProps = {
    children: React.ReactNode;
}

type ContextValueType = {
    tasks: ITask[];
    setTasks: (val: ITask[]) => void;
    currentTask: ITask | null;
    setCurrentTask: (val: (ITask | null)) => void;
    value: string;
    setValue: (val: string) => void;
    date: string;
    setDate: (val: string | undefined) => void;
    start: string;
    setStart: (val: string | undefined) => void;
    stop: string;
    setStop: (val: string | undefined) => void; 
    addReminder: boolean;
    setAddReminder: (val: boolean) => void;
    strikeReminder: boolean;
    setStrikeReminder: (val: boolean) => void;
    focusedBtn: number;
    setFocusedBtn: (val: number) => void;
};

const Context = createContext<ContextValueType | undefined>(undefined);


const Parent: FC<ParentProps> = ({ children }) => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [currentTask, setCurrentTask] = useState<ITask | null>(null);
    const [value, setValue] = useState<string>('');
    const [date, setDate] = useState<string | undefined>('YYYY/MM/DD')
    const [start, setStart] = useState<string | undefined>('00:00')
    const [stop, setStop] = useState<string | undefined>('00:00')
    const [addReminder, setAddReminder] = useState<boolean>(true);
    const [strikeReminder, setStrikeReminder] = useState<boolean>(false);
    const [focusedBtn, setFocusedBtn] = useState<number>(-1);

    const contextValue: ContextValueType = {
        tasks,
        setTasks,
        currentTask,
        setCurrentTask,
        value, 
        setValue,
        date,
        setDate,
        start,
        setStart,
        stop,
        setStop,
        addReminder,
        setAddReminder, 
        strikeReminder,
        setStrikeReminder,
        focusedBtn,
        setFocusedBtn,
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