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
                    onChange={this.haldleChange}
                />
                <label htmlFor="ciudad">  Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={this.haldleChange} name="pais">

                    <option value=""> Selecciona un pais </option>
                    <option value="US" > EEUU</option>
                    <option value="MX" > Mexico</option>
                    <option value="AR" > Argentina</option>
                    <option value="CO" > Colombia</option>


                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow acccent-4" value ="Buscar"/>
            </div>

        </form>
    );
}

export default FormComponents;