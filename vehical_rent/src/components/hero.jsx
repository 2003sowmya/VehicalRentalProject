import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <h1>Find Your Perfect Ride Today!</h1>
            <p>Browse and rent a vehicle with ease and comfort.</p>
            <form action="/vehicles">
                <input type="text" placeholder="Search by vehicle type, location, etc." />
                <button type="submit" className="btn">Search Vehicles</button>
            </form>
        </section>
    );
};

export default Hero;
