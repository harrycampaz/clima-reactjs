import React from 'react';

function Error({msg}) {
    return (
        <div className="card-panel red darken-4 error col s12">
            {msg}
        </div>
    );
}

export default Error;