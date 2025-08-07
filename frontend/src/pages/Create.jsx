import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import TravelCard from '../components/TravelCard'; // Assuming you have a TravelCard component


const Create = () => {
    return (
        <>
        <div className = " relative">
            <div className="flex flex-col absolute z-10 border rounded-lg h-180 w-80 p-4 b-4 m-4 bg-white">
                <div className  = "border">
                    <h1>Title</h1>
                </div>
                <div className = "flex-1 flex flex-col overflow-y-auto">
                    <TravelCard />
                </div>

            </div>

            <div className="absolute z-10 left-90 ">
                <input type="text" placeholder="Search..." className="border rounded-lg p-2 m-4 w-128 bg-white" />
            </div>
            
            <div className = "absolute z-0">
                <img src="/maps.png"/>
            </div>

        </div>

        </>

    );
}

export default Create;