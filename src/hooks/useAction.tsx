import React, { FC, createContext, useContext } from 'react';
import { useTask } from './useTask';
import { useModal } from './useModal';
import { getToday } from '../utils/date';

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
    const {tasks, setTasks, currentTask, value, setValue, date, setDate, start, setStart, stop, setStop, setAddReminder, setStrikeReminder} = useTask();
    const {setShowAddTask, setShowDeleteTask, setShowEditTask} = useModal();


    const addTask = (value: string) => {
        const newTask = [{userId: 1, id: 1, title: value, completed: false, date, start, stop}, ...tasks];
        setTasks([...newTask]); 
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
                date,
                start,
                stop
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
                break;
        }
     }

    
    const leftBtnHandler = (action: string) => {
        if(action === 'deleteTask'){
            actionHandler(action);
            setShowDeleteTask(false);
            return;
        } else if(action === 'addTask'){
            setShowAddTask(false);
        } else {
            setShowEditTask(false);
        }
        setStrikeReminder(false);
        setValue('');
        setDate('YYYY/MM/DD');
        setStart('00:00');
        setStop('00:00');
    }

    const rightBtnHandler = (action: string) => {
        if(action === 'editTask'){
            actionHandler(action);
            setShowEditTask(false);
        } else if(action === 'addTask'){
            actionHandler(action);
            setShowAddTask (false);
        } else {
            setShowEditTask(true);
            if (currentTask){
                setValue(currentTask.title);
                setDate(currentTask.date);
                setStart(currentTask.start);
                setStop(currentTask.stop);
            }
            setShowDeleteTask(false);
            return;
        }
        setStrikeReminder(false);
        setValue('');
        setDate('YYYY/MM/DD');
        setStart('00:00');
        setStop('00:00');
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