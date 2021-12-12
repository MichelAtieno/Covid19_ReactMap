import React from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./covidMap.css";


const CovidMap =({ countries }) => {
    
    const mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1,
    };

    const onEachCountry = (country, layer) => {
        const name = country.properties.ADMIN;
        layer.bindPopup(`${name}`); 
    }


    return (
        <MapContainer style={{ height: "90vh" }} 
                      zoom={2} 
                      center={[20, 100]}>
            <GeoJSON style={mapStyle}
                     data={countries}
                     onEachFeature={onEachCountry} />
        
        </MapContainer>
    );
};

export default CovidMap;