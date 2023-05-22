import React, { useState } from 'react';

const Insert = ({ onSubmit }) => {
    const [collaborator, setCollaborator] = useState({
        id: 0,
        name: '',
        email: '',
    })
    const handleChange = (e) => {
        setCollaborator({
            ...collaborator,
            [e.target.id]: e.target.value
        })
    }
    const saveCollaborator= (e) => {
        e.preventDefault();
        if(!collaborator.name || !collaborator.email){
            alert('Todos los campos son requeridos');
            return;
        }
        onSubmit(collaborator);
    }
    return (
        <form onSubmit={saveCollaborator}>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre del colaborador</label>
                <input type="text" class="form-control" id="name" onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email del colaborador</label>
                <input type="email" class="form-control" id="email" onChange={handleChange} />
            </div>
            <button type="submit" class="btn btn-primary">Agregar un colaborador</button>
        </form>
    )
}
export default Insert;