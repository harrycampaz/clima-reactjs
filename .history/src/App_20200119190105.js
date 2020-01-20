import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FormComponents from './components/FormComponents';
import { GLOBAL } from './config/constats';

import Error from './components/Error'
import Weather from './components/Weather';


function App() {


  // State principal

  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');

  const [error, setError] = useState(false);

  const [result, setResult] = useState({});

  useEffect(() => {

    const consultarAPI = async() => {


      const reque =`${GLOBAL.url}?q=${city},${country}&appid=${GLOBAL.apiKey}`;
  
      const response = await fetch(reque);
      const result = await response.json();
  
      console.log(result);

      setResult(result);
      
    
    }

    if(city === '') return;
    consultarAPI()
  }, [city, country])

  const datosConsulta = datos => {
    console.log(datos);

    //Validad datos
    if (datos.city === '' || datos.country === '') {

      setError(true);

      return;
    }

    //Validacion correcta

    setCity(datos.city);
    setCountry(datos.country);
    setError(false);

  }



  // Cargar componente condicional


  let errorComponents;

  if (error) {
    errorComponents = <Error msg="Campos obligatorios" />
  } else if(result.cod === "404"){
    errorComponents = <Error msg="No se encuentra la Ciudad" />  
  }else {
    errorComponents = <Weather result = {result}/>;
  }

  return (
    <div className="App">
      <Header titulo="Reporte del clima" />

      <div className="contenedor-form" >
        <div className="container">
          <div className="row">
            <div className="col s12 m6 ">
              <FormComponents datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6 ">
              {errorComponents}
            </div>
          </div>



        </div>
      </div>



    </div>
  );
}

export default App;
