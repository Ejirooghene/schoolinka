import React, { FC, createContext, useContext, useState } from 'react';

// Define the ContextValueType
type ContextValueType = {
    showAddTask: boolean;
    setShowAddTask: (value: boolean) => void;
    showDeleteTask: boolean;
    setShowDeleteTask: (value: boolean) => void;
    showEditTask: boolean;
    setShowEditTask: (value: boolean) => void;
};

const Context = createContext<ContextValueType | undefined>(undefined);

type ParentProps = {
    children: React.ReactNode;  
};

const Parent: FC<ParentProps> = ({ children }) => {
    const [showAddTask, setShowAddTask] = useState<boolean>(false);
    const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false);
    const [showEditTask, setShowEditTask] = useState<boolean>(false);

    const contextValue: ContextValueType = {
        showAddTask,
        setShowAddTask,
        showDeleteTask,
        setShowDeleteTask,
        showEditTask,
        setShowEditTask,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default Parent;

export const useModal = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};