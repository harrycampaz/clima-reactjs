import React from 'react';

function FormComponents(props) {

    haldleChange = (e) => {

    }

    return (
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={haldleChange}
                />
                <label htmlFor="ciudad">  Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={haldleChange} name="pais">

                    <option value=""> Selecciona un pais </option>
                    <option value="US" > EEUU</option>
                    <option value="MX" > Mexico</option>
                    <option value="AR" > Argentina</option>
                    <option value="CO" > Colombia</option>


                </select>
            </div>

        </form>
    );
}

export default FormComponents;