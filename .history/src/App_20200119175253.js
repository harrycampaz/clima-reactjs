import React from 'react';
import Header from './components/Header';
import FormComponents from './components/FormComponents';


function App() {

  const datosConsultar = datos =>{
    console.log(datos);
    
  }

  return (
    <div className="App">
      <Header titulo= "Reporte del clima"/>

<div className="contenedor-form" >
  <div className="container">
    <div className="row">
      <div className="col s12 m6 ">
      <FormComponents datosConsultar={datosConsultar} />
      </div>

    </div>

  </div>
</div>



    </div>
  );
}

export default App;
