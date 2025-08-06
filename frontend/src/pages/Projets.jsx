import Card from "../components/Card";


const Projets = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-8">
      <h1 className="text-2xl font-bold">Liste des Projets</h1>
    </div>
    <div className = "flex flex-wrap gap-6 p-4">
        <Card />
        <Card />
    </div>
    </>
  );
}

export default Projets;