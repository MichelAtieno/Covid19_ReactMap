import React, { useState, useEffect } from 'react';
import Loading from './loading';
import CovidMap from './covidMap';
import Legend from './legend';
import LoadCountriesTask from '../tasks/loadCountriesTask';
import legendItems from '../entities/legendItems';

const Covid19 = () => {
    const [countries, setCountries] = useState([]);
    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };
    
    useEffect(load,[]);
    
    return (
        <div>

            {countries.length === 0 ? (
                <Loading /> ) : (
            <div>
                <CovidMap countries={countries} />
                <Legend legendItems={legendItemsInReverse} />
            </div>
        )}
        </div>
    );

}

export default Covid19;
        
