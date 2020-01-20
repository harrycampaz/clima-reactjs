import React, { useState } from 'react';
import Header from './components/Header';
import FormComponents from './components/FormComponents';


function App() {


  // State principal

  const [city, setCity] = useState('');

  conts [country, setCountry] = useState('');

  const datosConsulta = datos =>{
    console.log(datos);

    //Validad datos

    if(datos.ciudad === '' || datos.country === ''){
      return ;
    }

    //Validacion correcta

    setCity(datos.city);
    setCountry(datos.country);
    
  }

  return (
    <div className="App">
      <Header titulo= "Reporte del clima"/>

<div className="contenedor-form" >
  <div className="container">
    <div className="row">
      <div className="col s12 m6 ">
      <FormComponents datosConsulta={datosConsulta} />
      </div>

    </div>

  </div>
</div>



    </div>
  );
}

export default App;
