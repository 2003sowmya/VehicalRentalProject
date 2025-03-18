import React from 'react';

const VehicleFilter = () => {
    return (
        <section className="vehicle-filter">
            <h2>Filter Your Search</h2>
            <form>
                <input type="text" placeholder="Enter Location" id="location" />
                <select id="vehicle-type">
                    <option value="all">All Vehicle Types</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                    <option value="bus">Tourist Bus</option>
                </select>
                <button type="submit" className="btn">Search</button>
            </form>
        </section>
    );
};

export default VehicleFilter;
