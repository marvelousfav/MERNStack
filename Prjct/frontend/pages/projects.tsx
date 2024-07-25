import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
    }
  }
`;

const ProjectsPage: React.FC = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="mt-4">
                {data.projects.map((project: any) => (
                    <div key={project.id} className="border p-4 mb-4 rounded-md">
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
