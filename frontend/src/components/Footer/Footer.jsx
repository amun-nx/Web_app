function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Tous droits réservés – Web App</p>
      <p className="mt-2 text-xs text-gray-400">Fin de la page !</p>
    </footer>
  );
}

export default Footer;
