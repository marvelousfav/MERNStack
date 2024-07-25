import Task from '../models/Task';

const taskResolvers = {
    Query: {
        tasks: async () => {
            try {
                const tasks = await Task.find().populate('project').populate('assignedTo');
                return tasks;
            } catch (err) {
                throw err;
            }
        },
        task: async (_: any, { id }: any) => {
            try {
                const task = await Task.findById(id).populate('project').populate('assignedTo');
                return task;
            } catch (err) {
                throw err;
            }
        }
    },
    Mutation: {
        createTask: async (_: any, { taskInput }: any) => {
            try {
                const task = new Task({
                    name: taskInput.name,
                    description: taskInput.description,
                    project: taskInput.projectId,
                    assignedTo: taskInput.assignedToId,
                    dueDate: taskInput.dueDate,
                    status: taskInput.status
                });
                const result = await task.save();
                return result;
            } catch (err) {
                throw err;
            }
        }
    }
};

export default taskResolvers;
