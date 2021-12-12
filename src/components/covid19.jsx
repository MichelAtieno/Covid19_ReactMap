import React, { useState, useEffect } from 'react';
import Loading from './loading';
import CovidMap from './covidMap';
import Legend from './legend';


const Covid19 = () => {
    const [countries, setCountries] = useState(["Canada"]);
    
    return (
        <div>

            {countries.length === 0 ? (
                <Loading /> ) : (
            <div>
                <CovidMap />
                <Legend />
            </div> )}

        </div>
    );
};

export default Covid19;
