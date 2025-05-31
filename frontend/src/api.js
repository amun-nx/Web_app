// src/api.js
import axios from 'axios';

// Création d'une instance Axios avec l'URL de ton backend
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',  // <-- l'adresse de ton backend
});

export default api;
