import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import axios from 'axios';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then((response) => setTasks(response.data))
            .catch((error) => console.error('Erro ao buscar tarefas:', error));
    }, []);

    const addTask = (newTask) => {
        axios.post('http://localhost:5000/tasks', newTask)
            .then((response) => setTasks([...tasks, response.data]))
            .catch((error) => console.error('Erro ao adicionar tarefa:', error));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => setTasks(tasks.filter((task) => task.id !== id)))
            .catch((error) => console.error('Erro ao excluir tarefa:', error));
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Tarefas</h2>
            <Form
                onSubmit={addTask}
                fields={[
                    { label: 'Nome da Tarefa', name: 'title', type: 'text', required: true },
                    { label: 'Status', name: 'status', type: 'text', required: true },
                ]}
            />
            <div style={styles.cardContainer}>
                {tasks.map((task) => (
                    <Card
                        key={task.id}
                        title={task.title}
                        description={`Status: ${task.status}`}
                        onDelete={() => deleteTask(task.id)}
                    />
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
};

export default TasksPage;
    