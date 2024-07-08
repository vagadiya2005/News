import React from 'react';
import Service from './Service';
export default function Midsection() {
  return (
    <div>


    <div className="midsection img-fluid">
    
    
    <h2 style={{fontWeight:800}} >SHREEJI INTERNATIONAL</h2>
    
    <h3>IMPORT | EXPORT</h3>
    
    </div>


    <div className="home-cards">
    
   
  
    <div className="card mb-3 " style={{maxWidth: '540px' , backgroundColor:'rgb(187, 186, 186)'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://shreejiinternationals.in/Resources/Images/agrochemicalsFarming_01.png" className="img-fluid rounded-start"  style={{height:'150px'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Why Shreeji International</h5>
        <p className="card-text">Shreeji international has been the leading supplier and exporter of chemicals for many years. With clients ranging from big to small and medium-sized companies across the globe.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>



<div className="card mb-3" style={{maxWidth: '540px', height: '224px' ,backgroundColor:'rgb(187, 186, 186)'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src='https://shreejiinternationals.in/Resources/Images/steven-weeks-DUPFowqI6oI-unsplash.jpg' className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
       <h5 className="card-title">Card title</h5>
        <p className="card-text">The Best Crop Protection
        Comes From Your Own Plant
        Resistance</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>



    </div>



    <div className="services">
    <h2 style={{ fontWeight: "500" }}>OUR SERVICE</h2>
    <h4 style={{ fontWeight: "350" }}>
      Our wide range of agrochemical services include:
    </h4>

    <ul>
      <li>
        {" "}
        Advice and information on when and where to use our pesticides
        products
      </li>
      <li>
        Products for hobby farmers through to agricultural operations - all
        in simple convenient packaging
      </li>
      <li>
        Specialist products supporting a diverse range of crops including:
      </li>
    </ul>


    <div className="cards">
    

    


  </div>




  </div>







      
    </div>


  )
}
