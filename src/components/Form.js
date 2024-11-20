import React, { useState } from 'react';

const Form = ({ onSubmit, fields }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({});
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            {fields.map((field) => (
                <div key={field.name} style={styles.field}>
                    <label>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                    />
                </div>
            ))}
            <button type="submit">Enviar</button>
        </form>
    );
};

const styles = {
    form: { display: 'flex', flexDirection: 'column', gap: '10px' },
    field: { display: 'flex', flexDirection: 'column' },
};

export default Form;
