// src/App.jsx
import React, { useEffect, useState } from 'react';
import Projects from './components/Projects'; // On importe le composant projects

function App() {


  return (
    <div>
      <h1>Mes Projets</h1>
      <Projects />

    </div>
  );
}

export default App;
