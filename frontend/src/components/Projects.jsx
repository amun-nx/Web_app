import React, { useState, useEffect } from 'react';  // Importation des hooks React
import api from '../api'; // On importe l'instance Axios

function Projects(){
    const [projects, setProjects] = useState([]);  // Stocke les projets

    useEffect(() => {
        // On récupère les projets avec GET /api/project/
        api.get('projects/')
        .then(res => {
            setProjects(res.data);  // On met à jour l'état avec les données reçues
            console.log("Projets récupérés :", res.data);  // Affiche les projets dans la console
        })
        .catch(err => {
            console.error("Erreur lors de la récupération des projets :", err);
        });
    }, []);

    return (
      <ul>
        {projects.map(proj => (
          <li key={proj.id}><strong>{proj.project_name}</strong>
            <ul>
              {Object.entries(proj).map(([key, value]) => (
                <li key={key}>
                  {key} : {typeof value === 'object' ? JSON.stringify(value) : value}
                </li>
              ))}
            </ul>
          </li>  // Affiche le nom de chaque projet
        ))}
      </ul>
    );
}

export default Projects;