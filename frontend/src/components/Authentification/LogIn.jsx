import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [formData, setFormData] = useState({
        "username":'',
        'password':''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/token/', formData);
        const token = response.data.access;

        localStorage.setItem('jwtToken', token);
        alert('Connexion réussie !');

    } catch (error) {
        if (error.response) {
        alert(`Erreur: ${error.response.data.message}`);
        } else {
        alert('Erreur réseau');
        }
    }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Se connecter</h2>
                <form onSubmit= {handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input type="text" name = "username" value = {formData.username || ''} onChange = {handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">Mot de passe</label>
                        <input type="password" name = "password" value = {formData.password || ''} onChange = {handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">Se connecter</button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Pas de compte ? <Link to="/signup" className="text-blue-600 hover:underline">Créer un compte</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LogIn;