import React, { useState, useEffect } from 'react';  // Importation des hooks React
import api from '../../api'; // On importe l'instance Axios
import { useParams } from 'react-router-dom'; // Pour récupérer les paramètres de l'URL

function ProjectForm(){

    const {project_id} = useParams(); // Récupère l'ID du projet depuis l'URL
    const [project, setProject] = useState({ project_name: '' }); // É
    
    useEffect(() => {
        if (project_id) {
            api.get(`projects/${project_id}/`)
                .then(res => setProject(res.data))
                .catch(err => console.error("Erreur chargement projet :", err));
        }
    }, [project_id]);

    // Fonction pour gérer les changements dans le formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value }); // Met à jour l'état du projet avec les valeurs du formulaire
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la sou
   

        if (project_id) {
            api
                .put(`projects/${project_id}/`, project)
                .then(res => {
                    console.log("Projet mis à jour :", res.data);
                })
                .catch(err => {
                    console.error("Erreur lors de la mise à jour du projet :", err);
                });
        } else {
            api
                .post('projects/', project)
                .then(res => {
                    console.log("Projet créé :", res.data);
                })
                .catch(err => {
                    console.error("Erreur lors de la création du projet :", err);
                });
        };
    };


    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                name="project_name"
                placeholder="Nom du projet"
                required
                onChange = {handleChange}
                value = {project.project_name}
            />
            <button type="submit">
                {project_id ? 'Mettre à jour le projet' : 'Créer un nouveau projet'}
            </button>
        </form>

    );

}

export default ProjectForm;