
const TipCard = ({tip}) => {
    return (
            <div className = "flex flex-1 flex-col border p-2 rounded-lg items-center">
                <img src = "./plane.png" className = "w-16 h-16">
                </img>
                <h1>
                    {tip}
                </h1>
            </div>
    );
}

export default TipCard;