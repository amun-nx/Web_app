// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importation des routes
import ProjectList from './components/Projects/ProjectList'; // On importe le composant projects
import ProjectForm from './components/Projects/ProjectForm'; // On importe le composant ProjectForm
import ProjectDetails from './components/Projects/ProjectDetails'; // On importe le composant ProjectDetails
import NavBar from './components/NavBar/NavBar'; // On importe la barre de navigation
import Footer from './components/Footer/Footer'; // On importe le composant Footer
import Home from './pages/Home'; // On importe la page d'accueil
import Create from './pages/Create'; // On importe la page de création de projet
import Projets from './pages/Projets';

function App() {


  return (
      <>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          
          <main className="flex-grow w-full">
            <div className='max-w-6xl mx-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projets />} />
              <Route path="/create" element={<Create />} />
            </Routes>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
  );
}

export default App;
