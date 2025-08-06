// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importation des routes
import ProjectList from './components/Projects/ProjectList'; // On importe le composant projects
import ProjectForm from './components/Projects/ProjectForm'; // On importe le composant ProjectForm
import ProjectDetails from './components/Projects/ProjectDetails'; // On importe le composant ProjectDetails


function App() {


  return (
    <div>
      <h1>Mes Projets</h1>
      <ProjectList />
      <h2>Créer ou Mettre à jour un Projet</h2>
      <ProjectForm />
      <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/projects/create">Créer un Projet</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:project_id" element={<ProjectDetails />} />
        <Route path="/projects/edit/:project_id" element={<ProjectForm />} />
        <Route path="/projects/create" element={<ProjectForm />} />
      </Routes>
    </div>
  );
}

export default App;
