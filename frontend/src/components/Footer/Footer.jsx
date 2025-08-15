import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Tous droits réservés – Web App</p>
      <div className="flex flex-row justify-center mt-2">
        <Link to="/about" className="text-sm hover:underline mx-2">À propos</Link>
        <Link to="/contact" className="text-sm hover:underline mx-2">Contact</Link>
        <Link to="/privacy" className="text-sm hover:underline mx-2">Politique de confidentialité</Link>
      </div>
    </footer>
  );
}

export default Footer;
