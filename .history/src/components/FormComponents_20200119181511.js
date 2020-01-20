import React, {useState} from 'react';

function FormComponents({datosConsulta}) {


    //Busqueda = state, guardar = this.setState({})
    const [busqueda, saveBusqueda] = useState({
        city: "",
        county: ""
    })

    const haldleChange = e => {

        saveBusqueda({
            ...busqueda, 
            [e.target.name]: e.target.value
        })

        console.log(busqueda);
        

    }

    const consultarClima  = e =>{
        e.preventDefault();
        datosConsulta(busqueda)
    }

    return (
        <form
        onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={haldleChange}
                />
                <label htmlFor="ciudad">  Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={haldleChange} name="country">

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