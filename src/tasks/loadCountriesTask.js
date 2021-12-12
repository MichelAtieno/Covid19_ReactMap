import {features} from '../data/countries.json';

class LoadCountriesTask {
    
    load = (setState) => {
        setState(features);
        // console.log(features)
    };
}


export default LoadCountriesTask;