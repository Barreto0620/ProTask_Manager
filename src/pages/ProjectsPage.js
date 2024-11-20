import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import axios from 'axios';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then((response) => setProjects(response.data))
            .catch((error) => console.error('Erro ao buscar projetos:', error));
    }, []);

    const addProject = (newProject) => {
        axios.post('http://localhost:5000/projects', newProject)
            .then((response) => setProjects([...projects, response.data]))
            .catch((error) => console.error('Erro ao adicionar projeto:', error));
    };

    const deleteProject = (projectId) => {
        axios.delete(`http://localhost:5000/projects/${projectId}`)
            .then(() => {
                setProjects(projects.filter((project) => project.id !== projectId));
            })
            .catch((error) => console.error('Erro ao excluir projeto:', error));
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Projetos</h2>
            <Form
                onSubmit={addProject}
                fields={[
                    { label: 'Nome do Projeto', name: 'name', type: 'text', required: true },
                    { label: 'Descrição', name: 'description', type: 'text', required: true },
                ]}
            />
            <div style={styles.cardContainer}>
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.name}
                        description={project.description}
                    >
                        {/* Botão de excluir dentro de cada Card */}
                        <button
                            onClick={() => deleteProject(project.id)}
                            style={styles.deleteButton}
                        >
                            Excluir
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
    },
    title: {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#333',
        marginBottom: '20px',
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '900px',
        marginTop: '30px',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.3s',
    },
};

export default ProjectsPage;
