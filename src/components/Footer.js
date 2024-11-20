import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 - ProTask Manager | Todos os direitos reservados.</p>
        </footer>
    );
};

const styles = {
    footer: { textAlign: 'center', padding: '10px', backgroundColor: '#e0e0e0' }
};

export default Footer;
