import React from 'react';

const Card = ({ title, description, children, onDelete }) => {
    return (
        <div style={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
            {onDelete && (
                <button style={styles.deleteButton} onClick={onDelete}>
                    Excluir
                </button>
            )}
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    deleteButtonHover: {
        backgroundColor: '#d32f2f',
    },  
};

export default Card;
