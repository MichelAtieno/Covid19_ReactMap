import React, { useState, useEffect } from 'react';
import Loading from './loading';
import CovidMap from './covidMap';
import Legend from './legend';
import LoadCountriesTask from '../tasks/loadCountriesTask';


const Covid19 = () => {
    const [countries, setCountries] = useState([]);

    const load = () => {
        const loadingCountriesTask = new LoadCountriesTask();
        loadingCountriesTask.load(setCountries);
    };
    
    useEffect(load, [] );
    
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
