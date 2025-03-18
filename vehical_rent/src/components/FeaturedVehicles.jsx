import React from 'react';
import sedanImg from './images/sedan.jpg'; 
import suvImg from './images/suv.jpg';
import busImg from './images/bus.jpg';

const vehicles = [
    { id: 1, name: 'Sedan', price: '50/day', image: sedanImg },
    { id: 2, name: 'SUV', price: '80/day', image: suvImg },
    { id: 3, name: 'Tourist Bus', price: '100/day', image: busImg }
];

const FeaturedVehicles = () => {
    return (
        <section className="featured">
            <h2>Featured Vehicles</h2>
            <div className="vehicle-list">
                {vehicles.map((vehicle) => (
                    <div className="vehicle-card" key={vehicle.id}>
                        <img src={vehicle.image} alt={vehicle.name} />
                        <h3>{vehicle.name}</h3>
                        <p>{vehicle.price}</p>
                        <a href="/vehicle-detail" className="btn">View Details</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedVehicles;
