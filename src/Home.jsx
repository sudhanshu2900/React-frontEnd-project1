import React from 'react';
import web from "../src/images/img-9.jpg";
import { NavLink } from 'react-router-dom';
import Card from "./Card";
import Sdata from "./Sdata";

const Home =() => {
  return (
  <>
    <section id="header" className="d-flex align-item-center">
    <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Grow your Knowledge <strong className="brand-name"> CG</strong></h1>
                        <h2 className="my-3">
                            we are developer
                        </h2>
                        <div className="mt-3">
                            <NavLink to="" className="btn-get-started ">
                                Get Started</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid animated" alt="home img" />
                    </div>
                    </div>
                </div>
            </div>
    </div>

    <div className="my-5">
                <h1 className="text-center">Exploration</h1>
    </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className="row gy-4">
                {
                    Sdata.map((val, ind) => {
                        return <Card key={ind} 
                            imgsrc={val.imgsrc} 
                            title={val.title} />
                    })
                }
                </div>
            </div>
        </div>
    </div>

    
    </section>
  </>
  );
};

export default Home;