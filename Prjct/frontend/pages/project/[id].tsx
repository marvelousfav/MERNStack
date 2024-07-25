import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      tasks {
        id
        name
        status
      }
    }
  }
`;

const ProjectPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h2 className="text-2xl font-bold mt-4">Tasks</h2>
            <ul>
                {data.project.tasks.map((task: any) => (
                    <li key={task.id} className="border p-2 mb-2 rounded-md">
                        <p>{task.name}</p>
                        <p>Status: {task.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;
