import React from 'react';

const HomePage = () => {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.container}>
                <h2>Bem-vindo ao Gerenciador de Projetos</h2>
                <p>"Transforme a gestão de seus projetos e tarefas em uma experiência simples, ágil e altamente eficiente."</p>
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '65vh', // Isso garante que o footer vai sempre ficar no final
    },
    container: {
        padding: '20px',
        textAlign: 'center',
        flex: 1, // Isso faz o conteúdo ocupar o espaço disponível e empurra o footer para baixo
    },
};

export default HomePage;
