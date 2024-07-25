import Project from '../models/Project';

const projectResolvers = {
    Query: {
        projects: async () => {
            try {
                const projects = await Project.find().populate('user').populate('tasks');
                return projects;
            } catch (err) {
                throw err;
            }
        },
        project: async (_: any, { id }: any) => {
            try {
                const project = await Project.findById(id).populate('user').populate('tasks');
                return project;
            } catch (err) {
                throw err;
            }
        }
    },
    Mutation: {
        createProject: async (_: any, { projectInput }: any) => {
            try {
                const project = new Project({
                    name: projectInput.name,
                    description: projectInput.description,
                    user: projectInput.userId,
                    tasks: []
                });
                const result = await project.save();
                return result;
            } catch (err) {
                throw err;
            }
        }
    }
};

export default projectResolvers;
