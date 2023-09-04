import React, { FC, useState, createContext, useContext } from 'react';
import { useTask } from './useTask';

const Context = createContext<ContextValueType | undefined>(undefined);

type ParentProps = {
    children: React.ReactNode;
}

type ITask = {
    task: string;
    start: string;
    end: string;
    completed: boolean;
}

type ContextActionType = {
    setShowAddTask: (value: boolean) => void;
    setShowDeleteTask: (value: boolean) => void;
    setShowEditTask: (value: boolean) => void;
    toggleCheck: (index: number) => void;
    handleFocus: (index: number) => void;
    addTask: (val: string) => void;
}

// type ContextValueType = {
//     focused: number;
//     showAddTask: boolean;
//     showDeleteTask: boolean;
//     showEditTask: boolean;
// };

const Parent: FC<ParentProps> = ({ children }) => {
    const [focused, setFocused] = useState<number>(0);
    const [showAddTask, setShowAddTask] = useState<boolean>(false);
    const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false);
    const [showEditTask, setShowEditTask] = useState<boolean>(false);
    const [tasks, setTasks] = useTask();

    const toggleCheck = (index: number) => {
        setTasks((prevState: ITask[]) => {
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

    const addTask = (val: string) => {
        const task: ITask = {task: val, start: '04:00am', end: '06:00am', completed: false};
        setTasks((prevState: ITask[]) => [task, ...prevState])
    }

    const contextAction: ContextActionType = {
        setShowAddTask,
        setShowDeleteTask,
        setShowEditTask,
        toggleCheck,
        handleFocus,
        addTask
    }
    
    // const contextValue: ContextValueType = {
    //     focused,
    //     showAddTask,
    //     showDeleteTask,
    //     showEditTask,
    // };
    
    return (
        <Context.Provider value={addTask}>
            {children}
        </Context.Provider>
    )
}

export const useAction = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error("useAction must be used within a ParentProvider");
    }
    return context;
}

export const useActionValue = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error("useActionValue must be used within a ParentProvider");
    }
    return context; 
}

export default Parent;
