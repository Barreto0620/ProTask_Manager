import React from 'react';
import Form from '../components/Form';

const ContactPage = () => {
    const handleContactSubmit = (data) => {
        console.log('Contato enviado:', data);
        alert('Mensagem enviada com sucesso!');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Contato</h2>
            <Form
                onSubmit={handleContactSubmit}
                fields={[
                    { label: 'Nome', name: 'name', type: 'text', required: true },
                    { label: 'E-mail', name: 'email', type: 'email', required: true },
                    { label: 'Mensagem', name: 'message', type: 'textarea', required: true },
                ]}
            />
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

export default ContactPage;
