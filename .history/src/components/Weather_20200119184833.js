import React from 'react';
import PropTypes from 'prop-types';

Weather.propTypes = {
    
};

function Weather({result}) {
    console.log(result);
    
    return (
        <div className="card-panel white col s12">
<h2>{result.name}</h2>
        </div>
    );
}

export default Weather;