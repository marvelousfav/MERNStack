// src/resolvers/taskResolver.ts
import Task, { ITask } from '../models/Task';

const taskResolvers = {
    getTasks: async () => await Task.find(),
    getTask: async (args: { id: string }) => await Task.findById(args.id),
    addTask: async (args: ITask) => {
        const task = new Task(args);
        return await task.save();
    },
    updateTask: async (args: { id: string } & Partial<ITask>) => {
        return await Task.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteTask: async (args: { id: string }) => {
        return await Task.findByIdAndRemove(args.id);
    },
};

export default taskResolvers;
