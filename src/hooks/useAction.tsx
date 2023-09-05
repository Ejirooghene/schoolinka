import React, { FC, createContext, useContext } from 'react';
import { useTask } from './useTask';

type ParentProps = {
    children: React.ReactNode;
}

type ContextValueType = {
    addTask: (val: string) => void;
    deleteTask: (val: string) => void;
    editTask: (val1: string, val2: string) => void; 
}

const Context = createContext<ContextValueType | undefined>(undefined);


const Parent: FC<ParentProps> = ({ children }) => {
    const {tasks, setTasks} = useTask();

    const addTask = (value: string) => {
        const newTasks = [...tasks];
        newTasks.unshift({userId: 2, id: 2, title: value, completed: false});
        setTasks(newTasks);
    }

    const deleteTask = (title: string) => {
        const taskCopy = [...tasks];
        const newTask = taskCopy.filter(task => task.title !== title);
        setTasks(newTask);
    }

    const editTask = (oldTitle: string, newTitle: string) => {
        const taskCopy = [...tasks];
      
        const index = taskCopy.findIndex(task => task.title === oldTitle);
      
            const updatedTask = {
                ...taskCopy[index],
                title: newTitle,
            };
        
            // Create a new array with the updated task
            const updatedTaskCopy = [...taskCopy];
            updatedTaskCopy[index] = updatedTask;
        
            setTasks(updatedTaskCopy);
        };
      

    const contextValue: ContextValueType = {
        addTask,
        deleteTask,
        editTask
    }

    return (
        <Context.Provider value={contextValue} >
            {children}
        </Context.Provider>
    )
}


export const useAction = (): ContextValueType => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error("useAction must be used within a Parent component");
    }
    return context;
}  

export default Parent;