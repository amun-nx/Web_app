// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importation des routes
import NavBar from './components/NavBar/NavBar'; // On importe la barre de navigation
import Footer from './components/Footer/Footer'; // On importe le footer
import Home from './pages/Home'; // On importe la page d'accueil
import Create from './pages/Create'; // On importe la page de création de projet
import Projets from './pages/Projets';
import Tips from './pages/Tips'; // On importe la page des conseils

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const noPaddingRoutes = ['/create']; // les routes SANS marges

  const shouldWrap = !noPaddingRoutes.includes(location.pathname);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow w-full">
          {shouldWrap ? (
            <div className="max-w-6xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projets />} />
                <Route path="/create" element={<Create />} />
                <Route path="/tips" element={<Tips />} />
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projets />} />
              <Route path="/create" element={<Create />} />
              <Route path="/tips" element={<Tips />} />
            </Routes>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
