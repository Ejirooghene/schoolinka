import React, { FC, createContext, useContext } from 'react';
import { useTask } from './useTask';
import { useModal } from './useModal';

type ParentProps = {
    children: React.ReactNode;
}

type ContextValueType = {
    addTask: (val: string) => void;
    deleteTask: (val: string) => void;
    editTask: (val1: string, val2: string) => void; 
    leftBtnHandler: (val: string) => void;
    rightBtnHandler: (val: string) => void;
}

const Context = createContext<ContextValueType | undefined>(undefined);


const Parent: FC<ParentProps> = ({ children }) => {
    const {tasks, setTasks, currentTask, value, setValue} = useTask();
    const {setShowAddTask, setShowDeleteTask, setShowEditTask} = useModal();


    const addTask = (value: string) => {
        const newTasks = [...tasks];
        newTasks.unshift({userId: 2, id: 2, title: value, completed: false});
        setTasks(newTasks);
    }

    const deleteTask = (title: string) => {
        const tasksCopy = [...tasks];
        const newTasks = tasksCopy.filter(task => task.title !== title);
        setTasks([...newTasks]);
    }

    const editTask = (oldTitle: string, newTitle: string) => {
        const taskCopy = [...tasks];
      
        const index = taskCopy.findIndex(task => task.title === oldTitle);
      
            const updatedTask = {
                ...taskCopy[index],
                title: newTitle,
            };
        
        const updatedTaskCopy = [...taskCopy];
        updatedTaskCopy[index] = updatedTask;
    
        setTasks(updatedTaskCopy);
    };

    const actionHandler = (action: string) => {
        switch(action){
             case 'addTask':
                 addTask(value);
                 break;
             case 'deleteTask':
                 if(currentTask){
                     deleteTask(currentTask.title);
                 }
                 break;
             case 'editTask':
                 if(currentTask){
                     editTask(currentTask.title, value);
                 }
        }
     }

    
    const leftBtnHandler = (action: string) => {
        if(action === 'deleteTask'){
            actionHandler(action);
            setShowDeleteTask(false);
        } else if(action === 'addTask'){
            setShowAddTask(false);
        } else {
            setShowEditTask(false);
        }
        setValue('');
    }

    const rightBtnHandler = (action: string) => {
        if(currentTask){
            if(action === 'editTask'){
                actionHandler(action);
                setValue('');
                setShowEditTask(false);
            } else if(action === 'addTask'){
                actionHandler(action);
                setValue('');
                setShowAddTask(false);
            } else {
                setShowEditTask(true);
                setValue(currentTask.title);
                setShowDeleteTask(false);
            }
        }
    }
            

    const contextValue: ContextValueType = {
        addTask,
        deleteTask,
        editTask,
        leftBtnHandler,
        rightBtnHandler
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
      throw new Error("useModal must be used within a Parent component");
    }
    return context;
}  

export default Parent;