import React, { useState, useEffect } from 'react';  // Importation des hooks React
import api from '../../api'; // On importe l'instance Axios

function ProjectList(){
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

    const handleDelete = ((e) => {
        const projectId = e.target.value;  // Récupère l'ID du projet à supprimer
        api.delete(`projects/${projectId}/`)
        .then(res => {
            console.log("Projet supprimé :", res.data);  // Affiche le projet supprimé
            setProjects(projects.filter(proj => proj.id !== projectId));  // Met à jour l'état pour retirer le projet supprimé
        })
        .catch(err => {
            console.error("Erreur lors de la suppression du projet :", err);
        });
    });

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
            <button value={proj.id} onClick={handleDelete}>Supprimer</button> 
          </li>  // Affiche le nom de chaque projet
        ))}
      </ul>
    );
}

export default ProjectList;