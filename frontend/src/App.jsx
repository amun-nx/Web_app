// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importation des routes
import NavBar from './components/NavBar/NavBar'; // On importe la barre de navigation
import Footer from './components/Footer/Footer'; // On importe le footer
import Home from './pages/Home'; // On importe la page d'accueil
import Create from './pages/Create'; // On importe la page de création de projet
import Projets from './pages/Projets';
import Tips from './pages/Tips'; // On importe la page des conseils
import Login from './pages/LoginPage'; // On importe la page de connexion
import SignUp from './pages/SignUpPage'; // On importe la page d'inscription
import Stats from './pages/Stats'; // On importe la page des statistiques
import About from './pages/About'; // On importe la page à propos
import Contact from './pages/Contact'; // On importe la page de contact
import Settings from './pages/Settings'; // On importe la page des réglages
import Privacy from './pages/Privacy';

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
                <Route path="/create" element={<Create />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </div>
          ) : ( 
            <Routes>
              <Route path="/" element={<Home />} />
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
