export type ITask = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    date?: string;
    start?: string;
    stop?: string;
}