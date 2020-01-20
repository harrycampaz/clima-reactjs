import React from 'react';
import PropTypes from 'prop-types';

Weather.propTypes = {

};

function Weather({ result }) {
    console.log(result);
    const { name, main } = result;

    if (!name) return null;

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <h2>Clima de {result.name}</h2>
            <p className="temperatura">
                {parseInt(main.temp - kelvin, 10)}
            </p>

            <p> Temperatura maxima: {parseInt(main.temp_max - kelvin, 10)}</p>

            <p> Temperatura minima: {parseInt(main.temp_min - kelvin, 10)}</p>
        </div>
    );
}

export default Weather;