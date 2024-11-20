import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <h1>ProTask Manager</h1>
            </div>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <NavLink 
                            to="/" 
                            style={styles.navLink} 
                            activeStyle={styles.activeNavLink}
                        >
                            Início
                        </NavLink>
                    </li>
                    <li style={styles.navItem}>
                        <NavLink 
                            to="/projects" 
                            style={styles.navLink} 
                            activeStyle={styles.activeNavLink}
                        >
                            Projetos
                        </NavLink>
                    </li>
                    <li style={styles.navItem}>
                        <NavLink 
                            to="/tasks" 
                            style={styles.navLink} 
                            activeStyle={styles.activeNavLink}
                        >
                            Tarefas
                        </NavLink>
                    </li>
                    <li style={styles.navItem}>
                        <NavLink 
                            to="/contact" 
                            style={styles.navLink} 
                            activeStyle={styles.activeNavLink}
                        >
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#3b5998',
        color: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    logo: {
        fontSize: '20px',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        padding: '0',
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s, transform 0.3s',
    },
    activeNavLink: {
        fontWeight: 'bold',
        color: '#ffffff',
    },
};

export default Header;
