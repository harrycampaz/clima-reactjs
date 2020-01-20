import React from 'react';
import PropTypes from 'prop-types';

Weather.propTypes = {
    
};

function Weather({result}) {
    console.log(result);
    const { name, main} = result;
    
    if(!name) return null;

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
<h2>Clima de {result.name}</h2>
<p className="temperatura"></p>
        </div>
    );
}

export default Weather;