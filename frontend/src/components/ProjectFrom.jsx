import React, { useState, useEffect } from 'react';  // Importation des hooks React
import api from '../api'; // On importe l'instance Axios

function ProjectForm(){
    
    api.post('projects/',project)

    return (
        <form onSubmit = "define">
            <input
                type="text"
                name="project_name"
                placeholder="Nom du projet"
                required
                onChange =
            />
        </form>

    );

}

export default ProjectForm;