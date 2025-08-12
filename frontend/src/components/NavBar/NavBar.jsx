import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-black text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-6">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/create">Planneur</Link></li>
        <li><Link to="/stats">Statistiques</Link></li>
        <li><Link to="/tips">Conseils</Link></li>
      </ul>

      <ul className="flex space-x-4">
        {/*<li><button>Language</button></li>*/}
        <li><Link to="/login">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
