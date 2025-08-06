const Card = () => {
    return (
        <div className="border border-black rounded-lg p-4 w-64 gap-4 shadow-md transition-transform hover:scale-105 ">
            <div className  = "w-full h-40">
                <img src="https://via.placeholder.com/250x150" ></img>
            </div>
            <div>
                <h2 className = "font-bold">Title</h2>
                <p>Description </p>
            </div>
            <div>
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>

        </div>
    );
}

export default Card;